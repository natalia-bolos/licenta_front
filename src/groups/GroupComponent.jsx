import React from "react";

const GroupComponent =({key,name,type,description})=>{
    return(
        <li>
            <h2>{name}</h2>
            <p>{description}</p>
        </li>
    )
};

export default GroupComponent;
