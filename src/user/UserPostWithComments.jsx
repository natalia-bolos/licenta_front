import React from "react";
import PostComment from "../groups/PostComment";

const UserPostWithComments =({postId,userId, username,text,timestamp,comments})=>{
const commentsList=comments.map(comment=><PostComment key={comment.commentId} postId={comment.postId} userId={comment.userId} username={comment.username} text={comment.text} timestamp={comment.timestamp}/>)

    return(
        <div className="card">
            <p><b>{username}</b></p>
            <p><b>{text}</b></p>
            <p>{timestamp}</p>
            <ul>{commentsList}</ul>       
        </div>
    )
};

export default UserPostWithComments;