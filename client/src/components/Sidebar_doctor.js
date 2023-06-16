import React from "react";

function Sidebar_doctor() {
    return (
        <>
            <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
            <a className="nav-link  collapsed" href="/doctor/dashboard">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctor/appointment">
                <i className="bi bi-people"></i>
                <span>Appointments</span>
            </a>
            </li>
            {/* <!-- End Patients Page Nav --> */}

            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctor/patients">
                <i className="bi bi-people"></i>
                <span>Patients</span>
            </a>
            </li>

            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctor/messaging">
                <i className="bi bi-people"></i>
                <span>Messaging</span>
            </a>
            </li>


            {/* <!-- Your other nav items here --> */}
            <div className="sidebar-container a1" style = {{height : "150px"}}>
            {/* <!-- Your other nav items here --> */}
            <ul className="nav flex-column">
            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctor/userprofile">
                <i className="bi bi-person-circle"></i>
                <span>Profile</span>
            </a>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctor/setting">
                <i className="bi bi-people"></i>
                <span>Settings</span>
            </a>
            </li>

            <li className="nav-item">
            <a className="nav-link collapsed" href="/login">
                <i className="bi bi-box-arrow-right"></i>
                <span>Logout</span>
            </a>
            </li>
            {/* <!-- End Logout Page Nav --> */}
            </ul>
            </div>

            </ul>


            </aside>
            {/* <!-- End Sidebar--> */}
        </>
    );
}

export default Sidebar_doctor;