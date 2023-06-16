import React,{useState} from "react";
import Sidebar_doctor from "../../components/Sidebar_doctor.js";
import "../../index.css";
import Doclarge from "../../components/Doclarge.js";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import daydata from "../../data/daydata.json";
import profileimg from "../../assets/img/profile-img.jpg";
import {useNavigate} from "react-router-dom";
import Navbar_doctor from "../../components/Navbar_doctor.js";

function Bookappointment_doctor(){
    const navigate = useNavigate();
    const [shown,setshown] = useState(false);
    const [dataindex,setdataindex] = useState(null);
    const [value, onChange] = useState(new Date());
    const [options,setoptions] = useState([]);
    
    const handlechange = (event) => {
        const day1 = event.target.value;
        daydata.map((items) => {
            if(day1 != null)
            {
                setoptions(items[day1]);
            } 
        })
    }

    const openaction = (val) => {
        setshown(true);
        setdataindex(val);
    }
    return (
        <>
            <Navbar_doctor />
            <Sidebar_doctor />
            <main id="main" className="main">
            <div className="pagetitle a2" style = {{margin:"1rem 0 1rem 0"}}>
                <h1>Book Appointment</h1>
            </div>

            <div className = "book1">
                <div className = "book2">
                        <div className="search-bar" style = {{padding: "1rem"}}>
                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" style = {{width : "50%",border : "1px solid rgba(1, 41, 112, 0.2)", borderRadius: "3px"}} />
                            <button type="submit" title="Search" style = {{marginLeft:"-30px", background: "none", border : "0px", padding : "0px"}}><i className="bi bi-search"></i></button>
                        </form>
                        </div>
                    <div className = "book4">
                        <div className = "book5">
                            <p className = "viewfont">Patient</p>
                            <div className = "viewp1-1" style = {{width: "100%",marginTop: "0",padding:"0 1rem 0 1rem"}}>
                                <div className = "viewp2" style = {{padding: "0"}}>
                                    <img className = "viewimg" src = {profileimg}></img>
                                    <p className = "viewfont">Patient Name</p>
                                </div>
                                <div>
                                    <div className = "viewfont2">
                                            <p className = "viewlabel">MR No :</p>
                                            <p className = "viewans">12345</p>
                                        </div>
                                        <div className = "viewfont2">
                                            <p className = "viewlabel">OP No :</p>
                                            <p className = "viewans">12345</p>
                                        </div>
                                    <div className = "viewfont2">
                                        <p className = "viewlabel">Gender :</p>
                                        <p className = "viewans">Male</p>
                                    </div>
                                    <div className = "viewfont2">
                                        <p className = "viewlabel">Age :</p>
                                        <p className = "viewans">27</p>
                                    </div>
                                    <div className = "viewfont2">
                                        <p className = "viewlabel">Guardian :</p>
                                        <p className = "viewans">Guardian Name(relation)</p>
                                    </div>
                                    <div className = "viewfont2">
                                        <p className = "viewlabel">Phone :</p>
                                        <p className = "viewans">9876543211</p>
                                    </div>
                                </div>
                                <div className = "viewline"></div>
                                <div className = "viewfont2">
                                        <p className = "viewlabel">Last Consultation :</p>
                                        <p className = "viewans">16:00 - 16:10 PM, 22, Dec, 2022</p>
                                </div>
                                <div className = "viewfont2">
                                        <p className = "viewlabel">Consultant :</p>
                                        <p className = "viewans">Dr. Amit Singh (MRN)</p>
                                </div>
                            </div>
                        </div>
                        <div className = "book5">
                            <p className = "viewfont">Doctor</p>
                            <Doclarge name = "Dr. Lakshmi K" specialist = "Psychiatrist" location = "Banjara Hills, Hyderabad" mci = "12345" duration = "15 mins" fee = "Rs 2000" about = "Dr Lakshmi K is a psychiatrist specialist at Asha Hospital in Hyderabad" education = "Psychiatric medication, MBBS" /> 
                        </div>
                    </div>
                </div>
                <div className = "book3">
                    <div className = "book3-1">
                        <div className = "book3-2"><p className = "viewlabel">Regular</p></div>
                        <div className = "book3-2"><p className = "viewlabel">Inperson</p></div>
                        <div className = "book3-2"><p className = "viewlabel">Banjara Hills</p></div>
                    </div>
                    <p className = "actionfont" style = {{marginTop: "1rem"}}>Choose Date</p>
                    <DatePicker className = "react-date-picker"  onChange={onChange} value={value} />
                    <p className = "actionfont" style = {{marginTop: "1rem"}}>Choose Time</p>
                    <div className = "book6">
                        <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange = {handlechange}
                            style = {{display: "flex",justifyContent: "space-around",margin:"1rem 0 1rem 0"}}
                        >
                            <FormControlLabel value="morning" control={<Radio />} label="Morning" />
                            <FormControlLabel value="afternoon" control={<Radio />} label="Afternoon" />
                            <FormControlLabel value="evening" control={<Radio />} label="Evening" />
                        </RadioGroup>
                        </FormControl>
                    </div>
                    <select style = {{width : "100%",padding: "0.5rem 2rem 0.5rem 0.5rem"}}>
                            <option disabled>Please Select Available Time Slot...</option>
                            {options && options.map((item) => {
                                return (
                                    <option value = {item}>{item}</option>
                                );
                            })}
                    </select>
                    <div style = {{padding: "1rem",marginTop: "2rem", display: "flex",justifyContent:"center"}}>
                        <button className = "actionbutton" onClick = {() => navigate("/confirmappointment")}>Confirm</button>
                    </div>
                </div>
            </div>
            </main>
        </>
    );
}

export default Bookappointment_doctor;