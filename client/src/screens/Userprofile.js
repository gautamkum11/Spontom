import React from "react";
import "../index.css";
import "../assets/css/style.css";
import logoimg from "../assets/img/logo.png";
import {Helmet} from "react-helmet";

function Userprofile() {
    return (
        <>
            <Helmet>
                <link href="assets/css/style.css" rel="stylesheet" />
                <script src="assets/js/main.js"></script>
            </Helmet>
            <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <img src={logoimg} alt="" />
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
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
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

            <div class="pagetitle">
            <h1>Profile</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item">Users</li>
                <li className="breadcrumb-item active">Profile</li>
                </ol>
            </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section class="section profile">
            <div className="row">
                <div className="col-xl-4">

                <div className="card">
                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <h2>Receptionist Name</h2>
                    <h3>Receptionist</h3>
                    <div className="social-links mt-2">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                </div>

                <div className="col-xl-8">

                <div className="card">
                    <div className="card-body pt-3">
                    {/* <!-- Bordered Tabs --> */}
                    <ul className="nav nav-tabs nav-tabs-bordered">

                        <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                        </li>

                    </ul>
                    <div className="tab-content pt-2">

                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <h5 className="card-title">About</h5>
                        <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                        <h5 className="card-title">Profile Details</h5>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label ">Full Name</div>
                            <div className="col-lg-9 col-md-8">Receptionist Name</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Hospital Branch</div>
                            <div className="col-lg-9 col-md-8">Banjara Hills, Hyderabad</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Job</div>
                            <div className="col-lg-9 col-md-8">Web Designer</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Country</div>
                            <div className="col-lg-9 col-md-8">USA</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Address</div>
                            <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Phone</div>
                            <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Email</div>
                            <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                        </div>

                        </div>

                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                        {/* <!-- Profile Edit Form --> */}
                        <form>
                            <div className="row mb-3">
                            <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                            <div className="col-md-8 col-lg-9">
                                <img src="assets/img/profile-img.jpg" alt="Profile" />
                                <div className="pt-2">
                                <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></a>
                                <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                                </div>
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                            <div className="col-md-8 col-lg-9">
                                <textarea name="about" className="form-control a4" id="about">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="company" type="text" className="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="job" type="text" className="form-control" id="Job" value="Web Designer" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="country" type="text" className="form-control" id="Country" value="USA" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="address" type="text" className="form-control" id="Address" value="A108 Adam Street, New York, NY 535022" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="twitter" type="text" className="form-control" id="Twitter" value="https://twitter.com/#" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="facebook" type="text" className="form-control" id="Facebook" value="https://facebook.com/#" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="instagram" type="text" className="form-control" id="Instagram" value="https://instagram.com/#" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="linkedin" type="text" className="form-control" id="Linkedin" value="https://linkedin.com/#" />
                            </div>
                            </div>

                            <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                        {/* <!-- End Profile Edit Form --> */}

                        </div>

                        <div className="tab-pane fade pt-3" id="profile-settings">

                        {/* <!-- Settings Form --> */}
                        <form>

                            <div className="row mb-3">
                            <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                            <div className="col-md-8 col-lg-9">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="changesMade" checked />
                                <label className="form-check-label" for="changesMade">
                                    Changes made to your account
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="newProducts" checked />
                                <label className="form-check-label" for="newProducts">
                                    Information on new products and services
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="proOffers" />
                                <label className="form-check-label" for="proOffers">
                                    Marketing and promo offers
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                                <label className="form-check-label" for="securityNotify">
                                    Security alerts
                                </label>
                                </div>
                            </div>
                            </div>

                            <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                        {/* <!-- End settings Form --> */}

                        </div>

                        <div className="tab-pane fade pt-3" id="profile-change-password">
                        {/* <!-- Change Password Form --> */}
                        <form>

                            <div className="row mb-3">
                            <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="password" type="password" className="form-control" id="currentPassword" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="newpassword" type="password" className="form-control" id="newPassword" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                            </div>
                            </div>

                            <div className="text-center">
                            <button type="submit" className="btn btn-primary">Change Password</button>
                            </div>
                        </form>
                        {/* <!-- End Change Password Form --> */}

                        </div>

                    </div>
                    {/* <!-- End Bordered Tabs --> */}

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

export default Userprofile;