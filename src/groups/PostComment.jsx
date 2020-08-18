import React from "react";

const PostComment =({postId,userId,text,timestamp})=>{
    return(
        <div className="card">
            <p>{postId}</p>
            <p>Id of user that made the post {userId}</p>
            <p>{text}</p>
            <p>{timestamp}</p>
        </div>
    )
};

export default PostComment;