import React from "react";
import close from "../img/close.png";
import {useNavigate} from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Reschedule() {
    const navigate = useNavigate();
    return (
        <>
            <div className = "billingbox" style = {{backgroundColor: "#444444",height: "46.6rem"}}>
            <div className = "actionbox1" style = {{height: "30rem",width: "35rem"}}> 
                <div className = "actionbox2">
                    <p className = "viewfont">Reschedule Appointment</p>
                    <a style = {{cursor: "pointer"}} href = "/doctor/appointmentdetails" ><img src = {close} className = "actionimg"></img></a>
                </div>
                <div style = {{padding: "1rem 0 0 1rem"}}>
                    <p className = "actionfont">Choose</p>
                    <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        style = {{display: "flex"}}
                    >
                        <FormControlLabel value="morning" control={<Radio />} label="Reschedule" />
                        <FormControlLabel value="afternoon" control={<Radio />} label="Transfer" />
                    </RadioGroup>
                    </FormControl>
                </div>
                <div className = "actionbox4" style={{flexDirection: "column"}}>
                    <p className = "actionfont">Reason for Cancellation</p>
                    <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        style = {{display: "flex",flexDirection:"column"}}
                    >
                        <FormControlLabel value="morning" control={<Radio />} label="I'm having a schedule clash" />
                        <FormControlLabel value="afternoon" control={<Radio />} label="I'm not having on schedule" />
                        <FormControlLabel value="evening" control={<Radio />} label="Others" />
                    </RadioGroup>
                    </FormControl>
                    <textarea style = {{margin:"0 0 1rem 0", borderRadius: "5px",padding: "10px"}} placeholder= "Type your Reason" rows="3" cols="60"></textarea>
                </div>
                <div className = "actionbox6" style = {{padding:"0rem 1rem 0.5rem 1rem"}}>
                    <button className = "actionbutton" style = {{width : "40%"}} onClick= {() => navigate("/doctor/assessment")}>Proceed Cancellation</button>
                </div>
            </div>
            </div>
        </>
    );
}

export default Reschedule;