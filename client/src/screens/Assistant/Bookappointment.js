import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../index.css";
import data from "../../data/doctor.json";
import Docshort from "../../components/Docshort.js";
import Doclarge from "../../components/Doclarge.js";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import daydata from "../../data/daydata.json";
import Sidebar_Assistant from "../../components/Sidebar_Assistant";



function Bookappointment_Assistant() {
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
            <Navbar />  
            <Sidebar_Assistant />
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
                            <p className = "viewfont">Available Doctors</p>
                            {data && data.map((item, index) => {
                                return (
                                   <Docshort index = {index} name = {item.docname} specialist = {item.specialist} location = {item.Location} oncheck = {openaction} /> 
                                );
                            })}
                        </div>
                        <div className = "book5">
                            <p className = "viewfont">Chosen Doctor</p>
                            {shown && data && data.map((item, index) => {
                                if(index === dataindex)
                                {
                                    return (
                                        <Doclarge name = {item.docname} specialist = {item.specialist} location = {item.Location} mci = {item.MCInumber} duration = {item.Duration} fee = {item.Fee} about = {item.About} education = {item.Education} /> 
                                    );
                                }
                            })}
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
                        <button className = "actionbutton">Confirm</button>
                    </div>
                </div>
            </div>
            </main>
        </>
    );
}

export default Bookappointment_Assistant;