import React from "react";


// nuuush cum sa fac aici pls help
const PostComment =({postId,userId,text,timestamp,comments})=>{
const commentsList=comments.map(comment=><div><p>Ide of user that commented{comment.userId}</p><p>{comment.text}</p> <p>{comment.timestamp}</p></div>)
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

export default PostComment;