import React from "react";
import logoimg from "../assets/img/logo.png";
import img1 from "../assets/img/profile-img.jpg";

function Navbar() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <img src= {logoimg} alt="" />
                <span className="d-none d-lg-block">ANC</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>
            {/* <!-- End Logo --> */}

            <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
            </div>
            {/* <!-- End Search Bar --> */}

            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">

                <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search"></i>
                </a>
                </li>
                {/* <!-- End Search Icon--> */}

                {/* <!-- Full Screen Toggle Start --> */}
            
            <li className="nav-item dropdown"></li>
                <button onclick= "toggleFullscreen()" type="button" className="icon" data-bs-toggle="fullscreen">
                <i className="bi-arrows-fullscreen"></i>
            </button> 

            <script>
                
            </script>

            {/* <!-- Full Screen Toggle End -->  */}

                <li className="nav-item dropdown">

                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell"></i>
                    <span className="badge bg-primary badge-number">4</span>
                </a>
                {/* <!-- End Notification Icon --> */}

                

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                    <i className="ri-calendar-2-line"></i>
                    <div>
                        <h4>Schedule Changed</h4>
                        <p>You have successfully changed schedule an appointment with Dr. Doctor Name on January 24, 2023, 13:00 PM</p>
                        <p>30 min. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>Appointment Cancelled</h4>
                        <p>You have successully canceled your appointment with Doctor name on Febraury 12, 2023</p>
                        <p>1 hr. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider" /> 
                    </li>

                    <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Appointment Transfer Success</h4>
                        <p>Your Appointment from Doctor A to Doctor B has been successfully transferred</p>
                        <p>2 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Account Setup Successful</h4>
                        <p>Your account creation is successful, you can now experience our services</p>
                        <p>4 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                    </li>

                </ul>
                {/* <!-- End Notification Dropdown Items --> */}

                </li>
                {/* <!-- End Notification Nav --> */}


                <li className="nav-item dropdown pe-3">

                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src={img1} alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">Receptionist</span>
                </a>
                {/* <!-- End Profile Iamge Icon --> */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                    <h6>Receptionist Name</h6>
                    <span>Receptionist</span>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="/userprofile">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-lock"></i>
                        <span>Lock Screen</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                    </li>

                </ul>
                {/* <!-- End Profile Dropdown Items --> */}
                </li>
                {/* <!-- End Profile Nav --> */}

            </ul>
            </nav>
            {/* <!-- End Icons Navigation --> */}

            </header>

            <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
            <a className="nav-link  collapsed" href="/doctoravailability">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li className="nav-item">
            <a className="nav-link" href="/patients">
                <i className="bi bi-people"></i>
                <span>Patients</span>
            </a>
            </li>
            {/* <!-- End Patients Page Nav --> */}

            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctoravailability">
                <i className="bi bi-file-person"></i>
                <span>Doctors Availability</span>
            </a>
            </li>
            {/* <!-- End Doctors Availability Nav --> */}

            <li className="nav-item">
            <a className="nav-link collapsed" href="/doctoravailability">
                <i className="bx bx-brain"></i>
                <span>rTMS Availability</span>
            </a>
            </li>
            {/* <!-- End rTMS Availability Nav --> */}



            {/* <!-- Your other nav items here --> */}
            <div className="sidebar-container a1">
            {/* <!-- Your other nav items here --> */}
            <ul className="nav flex-column">
            <li className="nav-item">
            <a className="nav-link collapsed" href="/userprofile">
                <i className="bi bi-person-circle"></i>
                <span>Profile</span>
            </a>
            </li>
            {/* <!-- End Profile Page Nav --> */}

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

export default Navbar;