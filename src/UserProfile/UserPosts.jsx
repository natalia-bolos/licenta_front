import React from 'react';
import { getUserPosts} from '../util/ApiUtils';
import { USER_ID } from '../constants';
import UserPostWithComments from "../user/UserPostWithComments"
import {
    Typography,
    // Avatar,
    Divider,
    // Grid,
    // List,
    // ListItem,
    // ListItemIcon,
    // ListItemText,
    // Chip,
    // Card,
    // CardMedia,
    // CardContent,
    // CardActions,
    // IconButton
} from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Phone';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import EmailIcon from '@material-ui/icons/Email';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class UserPosts extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        posts:[],   
      };

}

  componentDidMount() {
    console.log(localStorage.getItem(USER_ID));
    getUserPosts(localStorage.getItem(USER_ID)).then(response=>{
        this.setState({posts:response})
    })
}
    render(){
      const postList=this.state.posts.map(post=><UserPostWithComments key={post.postId} userId={post.userId} username={post.username} postId={post.postId} text={post.text} timestamp={post.timestamp} comments={post.comments}/>)
        return (
          <div>
              <Divider />
              <Typography variant="h5" component="h2" style={{margin: '20px'}}>
                Recent Posts
              </Typography>
              {postList}
             
          </div>
        );
      }

}