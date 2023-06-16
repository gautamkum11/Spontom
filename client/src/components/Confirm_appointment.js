import React from "react";
import "../index.css";
import close from "../img/close.png";
import profileimg from "../assets/img/profile-img.jpg";
import icon from "../img/profileicon.svg";
import {useNavigate} from "react-router-dom";

function Confirm_appointment() {
    const navigate = useNavigate();
    return (
        <>
            <div className = "billingbox" style = {{backgroundColor: "#444444",height: "46.6rem"}}>
             <div className = "billingbox1" style = {{width:"40%",margin: "0"}}> 
                <div className = "actionbox2">
                    <p className = "viewfont">Confirm Appointment</p>
                    <a style = {{cursor: "pointer"}} href = "/doctor/bookappointment"><img src = {close} className = "actionimg"></img></a>
                </div>
                <div className = "actionbox3" >
                    <img className = "actionimg1" src = {profileimg}></img>
                    <div>
                        <p className = "actionfont">Doctor Name</p>
                        <p className = "viewlabel">Speciality</p>
                        <p className = "actionfont">MCI No: 12345</p>
                    </div>
                </div>
                <div className = "actionbox4" style = {{columnGap: "5rem"}}>
                    <div className = "actionbox4-1">
                        <div>
                            <p className = "actionfont">Date</p>
                            <p className = "actionfontans">Friday, 22 December, 2022</p>
                        </div>
                        <div style = {{marginTop: "1rem"}}>
                            <p className = "actionfont">Consultation :</p>
                            <p className = "actionfontans">Virtual</p>
                        </div>
                    </div>
                    <div className = "actionbox4-2">
                        <div>
                            <p className = "actionfont">Time</p>
                            <p className = "actionfontans">16:00 - 16:10 PM, 10 mins</p>
                        </div>
                        <div style = {{marginTop: "1rem"}}>
                            <p className = "actionfont">Address</p>
                            <p className = "actionfontans">4th Floor, Fantasy Square Building, Biodiversity Circle,Gachibowli, Hyderabad, Telangana 500032</p>
                        </div>
                    </div>
                </div>
                <div className = "actionbox5" style = {{display: "flex",alignItems: "center",columnGap: "1rem"}}>
                    <img src = {icon} style = {{width: "2rem", height: "2rem"}}></img>
                    <select style = {{width : "1000%", height:"3rem", borderRadius: "5px",padding: "0 0 0 1rem"}}>
                        <option>Patient 1</option>
                    </select>
                </div>
                <textarea style = {{margin:"0 1rem 0 1rem", borderRadius: "5px",padding: "10px"}} placeholder= "Type your concerns" rows="4" cols="50">
                </textarea>
                <div style = {{padding: "1rem",marginTop: "0.5rem", display: "flex",justifyContent:"center"}}>
                        <button className = "actionbutton" onClick = {() => navigate("/paymentsuccessfull")}>Proceed for Payment</button>
                </div>
            </div>
            </div>
        </>
    );
}

export default Confirm_appointment;