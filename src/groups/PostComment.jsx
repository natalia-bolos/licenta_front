import React from "react";

const PostComment =({postId,userId,username,text,timestamp})=>{
    return(
        <li className="card">
            <p><b>{username}</b></p>
            <p>{text}</p>
            <p>{timestamp}</p>
        </li>
    )
};

export default PostComment;