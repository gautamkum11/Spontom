import React from "react";
import "../index.css";
import profileimg from "../img/TMS-2--min.webp";

function Procshort(props) {
    console.log(props);
    const handleclick = () => {
        props.oncheck(props.index); 
    }

    return (
        <div className = "docshort1" onClick = {handleclick}>
            <img src = {profileimg} className = "docshortimg"></img>
            <div className = "docshort2">
                <p className = "actionfont">{props.name}</p>
                <p className = "viewlabel">{props.specialist}</p>
                <p className = "viewlabel">{props.location}</p>
            </div>
        </div>
    );
}

export default Procshort;