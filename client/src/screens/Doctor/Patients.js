import React from "react";
import Navbar_doctor from "../../components/Navbar_doctor.js";
import Sidebar_doctor from "../../components/Sidebar_doctor.js";
import img from "../../img/user.png";

function Patients_doctor() {
    return (
        <>
            <Navbar_doctor />
            <Sidebar_doctor />
            <main id="main" className="main">

            <div className="pagetitle a2" style = {{padding: "1rem"}} >
            <div>
                <h1>Patients</h1>
            </div>
            
            <div>
                <a className="btn btn-primary a3" href = "/doctor/bookappointment">Add Patient</a> 
            </div>
            
            </div> 

            <div className = "assistant1">
                <img className = "assistantimg" src = {img}></img>
                <p className = "viewfont" style = {{fontSize : "1.3rem",fontWeight: "800",margin: "1rem 0 0.5rem 0"}}>Patients will show here</p>
                <p className = "viewans" style = {{fontSize : "1rem"}}>It seems, there are no patients</p>
                <a className="btn btn-primary a3" href = "/doctor/bookappointment">Book Appointment</a> 
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

export default Patients_doctor;