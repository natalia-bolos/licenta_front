import React from "react";

const GroupComponent =({id,name,type,description,onGroupClicked})=>{
    return(
        <li onClick={()=>onGroupClicked(id,name)}>
            <h2>{name}</h2>
            <p>{description}</p>
            {/* <button onClick={()=>onGroupClicked(id)}>Select</button> */}
        </li>
    )
};

export default GroupComponent;
