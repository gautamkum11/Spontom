import React from "react";
import Navbar from "../../components/Navbar.js";
import Sidebar_Assistant from "../../components/Sidebar_Assistant";
import "./assistant.css";
import img from "../../img/appointment.png"

function Appointment() {
    return (
        <>
            <Navbar />
            <Sidebar_Assistant />
            <main id="main" className="main">

            <div className="pagetitle a2" style = {{padding: "1rem"}} >
            <div>
                <h1>Appointments</h1>
            </div>
            
            <div>
                <a className="btn btn-primary a3" href = "/assistant/bookappointment">Book Appointment</a> 
            </div>
            
            </div> 

            <div className = "assistant1">
                <img className = "assistantimg" src = {img}></img>
                <p className = "viewfont" style = {{fontSize : "1.3rem",fontWeight: "800",margin: "1rem 0 0.5rem 0"}}>Your Appointments will show here</p>
                <p className = "viewans" style = {{fontSize : "1rem"}}>It seems, there are no appointments booked as of now</p>
                <a className="btn btn-primary a3" href = "/assistant/bookappointment">Book Appointment</a> 
            </div>

            </main>
            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer" className="footer" style = {{position: "relative", width: "80%"}}>
            <div className="copyright">
            &copy; Copyright <strong><span>ANC</span></strong>. All Rights Reserved
            </div>
            </footer>
            {/* <!-- End Footer --> */}

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Appointment;