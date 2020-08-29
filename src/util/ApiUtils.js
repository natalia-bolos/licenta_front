import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getGroupsOfUser(userId){
    return request({
        url:API_BASE_URL+"group/"+userId,
        method:'GET'
    })
}

export function createGroup(group){
    return request({
        url:API_BASE_URL+"group/new",
        method: 'POST',
        body: JSON.stringify(group)
    })
}

export function joinGroup(group){
    return request({
        url:API_BASE_URL+"group/join",
        method: 'POST',
        body: JSON.stringify(group)
    })
}

export function getPostsOfGroup(groupId){
    return request({
        url:API_BASE_URL+"posts/group/"+groupId,
        method:'GET'
    })
}

export function addPostToGroup(post){
    return request({
        url:API_BASE_URL+"posts/group",
        method: 'POST',
        body: JSON.stringify(post)
    })
}

export function getMembersOfGroup(groupId){
    return request({
        url:API_BASE_URL+"group/members/"+groupId,
        method:'GET'
    })
}

export function getUserPosts(userId){
    return request({
        url:API_BASE_URL+"posts/user/"+userId,
        method:'GET'
    })
}

export function getPersonalInfo(userId){
    return request({
        url:API_BASE_URL+"user/more/"+userId,
        method:'GET'
    })
}

export function getGroupsByName(name){
    return request({
        url:API_BASE_URL+"group/name"+name,
        method:'GET'
    })
}

export function getAllGroups(){
    return request({
        url:API_BASE_URL+"group",
        method:'GET'
    })
}

export function getUsersByName(name){
    return request({
        url:API_BASE_URL+"user/name/"+name,
        method:'GET'
    })
}

export function setPersonalInfo(userId,userInfo){
    return request({
        url:API_BASE_URL+"user/more/"+userId,
        method: 'POST',
        body: JSON.stringify(userInfo)
    })
}

export function addMembership(membership){
    return request({
        url:API_BASE_URL+"user/add",
        method: 'POST',
        body: JSON.stringify(membership)
    })
}

export function addFile(postId,file){
    var data = new FormData();
    data.append("file",file);
    return fetch(API_BASE_URL+"uploadFile/post/group/"+postId,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        body: data
      }
    )     
}

export function getGroupFile(attachmentId){
    return fetch(API_BASE_URL+"downloadFile/group/"+attachmentId,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
      })
}

