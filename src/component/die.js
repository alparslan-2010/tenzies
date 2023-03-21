import React from "react";

export default function Die(props){

    return(

        <>
        <div className="die-face"
        style={{backgroundColor:props.dieObje.isSelected ? "#59e391" : "white"}}>

          <h3 className="die-num">{props.dieObje.value}</h3>  
        </div>
        </>
    )
}