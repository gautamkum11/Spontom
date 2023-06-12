import React from "react";
import "../index.css";
import close from "../img/close.png";
import profileimg from "../assets/img/profile-img.jpg";

function Appointmentdetails(props) {
    console.log(props.name);
    const handleclick = () => {
        props.oncheck(false);
    }
    return (
        <>
            <div className = "actionbox1">
                <div className = "actionbox2">
                    <p className = "viewfont">Appointment Details</p>
                    <a style = {{cursor: "pointer"}} onClick = {handleclick}><img src = {close} className = "actionimg"></img></a>
                </div>
                <div className = "actionbox3">
                    <img className = "actionimg1" src = {profileimg}></img>
                    <div>
                        <p className = "actionfont">Patient Name</p>
                        <p className = "actionfont">MR No: 12345</p>
                    </div>
                </div>
                <div className = "actionbox4">
                    <div className = "actionbox4-1">
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "actionfont">Gender :</p>
                            <p className = "actionfontans">Male</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "actionfont">Age :</p>
                            <p className = "actionfontans">27</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "actionfont">City :</p>
                            <p className = "actionfontans">Hyderabad</p>
                        </div>
                    </div>
                    <div className = "actionbox4-2">
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "actionfont">Appointment:</p>
                            <p className = "actionfontans">16:00 - 16:10 PM, 22, Dec, 2022</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "actionfont">Consultation :</p>
                            <p className = "actionfontans">Virtual</p>
                        </div>
                    </div>
                </div>
                <div className = "actionbox5">
                    <p className = "actionfont">Problem</p>
                    <p className = "actionfontans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a photo.</p>
                </div>
                <div className = "actionbox6">
                    <button className = "actionbutton">Cancel Appointment</button>
                    <button className = "actionbutton">Transfer/Reschedule</button>
                    <button className = "actionbutton">Collect Payment</button>
                </div>
            </div>
        </>
    );
}

export default Appointmentdetails;