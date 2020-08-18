import React from "react";
import PostComment from "./PostComment";

const PostWithComments =({postId,userId,text,timestamp,comments})=>{
const commentsList=comments.map(comment=><PostComment postId={comment.postId} userId={comment.userId} text={comment.text} timestamp={comment.timestamp}/>)

    return(
        <div className="card">
            <p>{postId}</p>
            <p>Id of user that made the post {userId}</p>
            <p>{text}</p>
            <p>{timestamp}</p>
            {commentsList}
        </div>
    )
};

export default PostWithComments;
