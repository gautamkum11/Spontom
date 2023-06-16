import React from "react";
import close from "../img/close.png";
import {useNavigate} from "react-router-dom";
import img from "../img/appointment.png"

function Paymentsuccessfull(){
    const navigate = useNavigate();
    return (
        <>
            <div className = "billingbox" style = {{backgroundColor: "#444444",height: "46.6rem"}}>
             <div className = "billingbox1" style = {{width:"40%",margin: "0"}}> 
                <div className = "actionbox2">
                    <p className = "viewfont">Payment Successful</p>
                    <a style = {{cursor: "pointer"}} href = "/doctor/bookappointment"><img src = {close} className = "actionimg"></img></a>
                </div>
                <div style = {{padding : "2rem 2rem 1rem 2rem", display: "flex",justifyContent: "center", flexDirection:"column" , alignItems : "center"}}>
                    <img className = "assistantimg" src = {img}></img>
                    <p className = "viewfont" style = {{color: "blueviolet", fontSize : "1.3rem",fontWeight: "800",margin: "1rem 0 0.5rem 0"}}>Your Appointment Successfully booked</p>
                    <a className="btn btn-primary a3" href = "/doctor/appointmentdetails">View Appointment</a> 
                    <p className = "viewfont" style = {{fontSize : "1.2rem",fontWeight: "800",margin: "0.5rem 0 0.5rem 0"}}>Preparing for Appointment</p>
                </div>
                <div style = {{margin: "0", padding:"0 1rem 1rem 1rem"}}>
                    <ul style = {{margin: "0"}}>
                        <li><p className = "viewfont" style = {{margin: "0"}}>Find a well-lit spot.</p></li>
                        <li><p className = "viewfont" style = {{margin: "0"}}>Make sure the camera is steady.</p></li>
                        <li><p className = "viewfont" style = {{margin: "0"}}>Make sure you are in the middle of the screen and the camera is at eye level.</p></li>
                        <li><p className = "viewfont" style = {{margin: "0"}}>Reduce background noise. Find a quiet place and reduce any distractions.</p></li>
                        <li><p className = "viewfont" style = {{margin: "0"}}>Turn off alarms and sounds on other devices.</p></li>
                        <li><p className = "viewfont" style = {{margin: "0"}}>Close other applications.</p></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}

export default Paymentsuccessfull;