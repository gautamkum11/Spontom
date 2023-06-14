import React,{useState} from "react";
import "../../index.css";
import Navbar from "../../components/Navbar";
import Proclarge from "../../components/Proclarge";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select'
import data from "../../data/availableprocedure.json";
import Procshort from "../../components/Procshort";

function Bookprocedure() {
    const [shown,setshown] = useState(false);
    const [dataindex,setdataindex] = useState(null);
    const [value, onChange] = useState(new Date());

    const openaction = (val) => {
        setshown(true);
        setdataindex(val);
    }

    const options = [
        { value: '11:00 AM', label: '11:00 AM' },
        { value: '11:00 AM', label: '12:00 AM' },
        { value: '11:00 AM', label: '11:00 AM' }
      ]

    return (
        <>
            <Navbar />
            <main id="main" className="main">
            <div className="pagetitle a2" style = {{margin:"1rem 0 1rem 0"}}>
                <h1>Book Procedure</h1>
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
                            <p className = "viewfont">Available Procedure</p>
                            {data && data.map((item, index) => {
                                return (
                                   <Procshort index = {index} name = {item.name} specialist = {item.specialist} location = {item.location} oncheck = {openaction} /> 
                                );
                            })}
                        </div>
                        <div className = "book5">
                            <p className = "viewfont">Chosen Procedure</p>
                            {shown && data && data.map((item, index) => {
                                if(index === dataindex)
                                {
                                    return (
                                        <Proclarge name = {item.name} specialist = {item.specialist} location = {item.location}  duration = {item.duration} fee = {item.fee} about = {item.about} /> 
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
                    <p className = "actionfont">Choose Date</p>
                    <DatePicker className = "react-date-picker"  onChange={onChange} value={value} />
                    <p className = "actionfont">Choose Time</p>
                    <div className = "book6">
                        <p style = {{margin: "1rem 0 1rem 0"}}  className = "viewlabel">Morning</p>
                        <Select options={options} />
                        <p style = {{margin: "1rem 0 1rem 0"}} className = "viewlabel">Afternoon</p>
                        <Select options={options} />
                        <p style = {{margin: "1rem 0 1rem 0"}} className = "viewlabel">Evening</p>
                        <Select options={options} />
                    </div>
                    <div style = {{padding: "1rem",display: "flex",justifyContent:"center"}}>
                        <button className = "actionbutton">Confirm</button>
                    </div>
                </div>
            </div>
            </main>
        </>
    );
}

export default Bookprocedure;