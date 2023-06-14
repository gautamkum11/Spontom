import React from "react";
import "../index.css";
import profileimg from "../img/TMS-2--min.webp";

function Proclarge(props) {
    return (
        <div className = "doclarge1">
                <div style = {{display : "flex"}}>
                    <img src = {profileimg} className = "docshortimg"></img>
                    <div className = "docshort2">
                        <p className = "actionfont">{props.name}</p>
                        <p className = "viewlabel">{props.specialist}</p>
                    </div>
                </div>
                <div style = {{padding: "1rem"}}>
                    <div style = {{display: "flex",justifyContent : "space-between"}}>
                        <div>
                            <p className = "viewlabel">Duration</p>
                            <p className = "viewans">{props.duration}</p>
                        </div>
                        <div>
                            <p className = "viewlabel">Fee</p>
                            <p className = "viewans">{props.fee}</p>
                        </div>
                    </div>
                    <p className = "viewlabel">Location</p>
                    <p className = "viewans">{props.location}</p>
                    <p className = "viewlabel">About</p>
                    <p className = "viewans">{props.about}</p>
                </div>
            </div>
    );
}

export default Proclarge;