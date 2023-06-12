import React, {useState} from "react";
import "../index.css";
import "../assets/css/style.css";
import img1 from "../assets/img/profile-img.jpg";
import logoimg from "../assets/img/logo.png";

function Addpatient() {
    const [toggle, setToggle] = useState(true);

    const togglesidebar = () => {
        if(toggle)
        setToggle(false);
        else 
        setToggle(true);
    }

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <img src= {logoimg} alt="" />
                <span className="d-none d-lg-block">ANC</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onclick = {togglesidebar}></i>
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
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="lock-screen.html">
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
            {/* <!-- End Header --> */}

            {/* <!-- ======= Sidebar ======= --> */}
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

            <main id="main" className="main">

            <div className="pagetitle a2">
            <div>
                <h1>Add Patient</h1>
                <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">Add Patient</li>
                </ol>
                </nav>
            </div>

            <div>
                <button type="button" className="btn btn-primary a3"><i className="bi bi-person-plus"></i>  Add Patient</button> 
            </div>
            </div>
            {/* <!-- End Page Title --> */}


            <section className="section">
                <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                    <div className="card-body mb-3">
                        <h5 className="card-title">General Form Elements</h5>
                        <form>
                        <div className="row mb-3">
                            <label for="inputText" className="col-sm-2 col-form-label">Text</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputNumber" className="col-sm-2 col-form-label">Number</label>
                            <div className="col-sm-10">
                            <input type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                            <div className="col-sm-10">
                            <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                            <input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputTime" className="col-sm-2 col-form-label">Time</label>
                            <div className="col-sm-10">
                            <input type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                            <div className="col-sm-10">
                            <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Textarea</label>
                            <div className="col-sm-10">
                            <textarea className="form-control a4"></textarea>
                            </div>
                        </div>
                        <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                            <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="" />
                                <label className="form-check-label" for="gridRadios1">
                                First radio
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" for="gridRadios2">
                                Second radio
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled="" />
                                <label className="form-check-label" for="gridRadios3">
                                Third disabled radio
                                </label>
                            </div>
                            </div>
                        </fieldset>
                        <div className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                            <div className="col-sm-10">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" for="gridCheck1">
                                Example checkbox
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck2" checked="" />
                                <label className="form-check-label" for="gridCheck2">
                                Example checkbox 2
                                </label>
                            </div>

                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Disabled</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" value="Read only / Disabled" disabled="" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Select</label>
                            <div className="col-sm-10">
                            <select className="form-select" aria-label="Default select example">
                                <option selected="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Multi Select</label>
                            <div className="col-sm-10">
                            <select className="form-select" multiple="" aria-label="multiple select example">
                                <option selected="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Submit Button</label>
                            <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Submit Form</button>
                            </div>
                        </div>

                        </form>


                        
                    </div>
                    </div>

                </div>
                </div>
            </section>

            </main>
            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer" className="footer">
            <div className="copyright">
            &copy; Copyright <strong><span>ANC</span></strong>. All Rights Reserved
            </div>
            </footer>
            {/* <!-- End Footer --> */}

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Addpatient;