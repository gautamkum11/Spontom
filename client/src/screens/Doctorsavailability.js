import React from "react";
import "../index.css";
import "../assets/css/style.css";
import logoimg from "../assets/img/logo.png";
import {Helmet} from "react-helmet";

function Doctorsavailability() {
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
                <button onclick="toggleFullscreen()" type="button" className="icon" data-bs-toggle="fullscreen">
                <i className="bi-arrows-fullscreen"></i>
            </button> 

            {/* <script>
                function toggleFullscreen() {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
                }
            </script> */}

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
                <a className="nav-link collapsed" href="/doctoravailability">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/patients">
                <i className="bi bi-people"></i>
                <span>Patients</span>
                </a>
            </li>
            {/* <!-- End Patients Page Nav --> */}

            <li className="nav-item">
                <a className="nav-link" href="/doctoravailability">
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

            <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section className="section dashboard">
            <div className="row">

                {/* <!-- Left side columns --> */}
                <div className="col-lg-8">
                <div className="row">

                    {/* <!-- Sales Card --> */}
                    <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">

                        <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                        </div>

                        <div className="card-body">
                        <h5 className="card-title">Sales <span>| Today</span></h5>

                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart"></i>
                            </div>
                            <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                    {/* <!-- End Sales Card --> */}

                    {/* <!-- Revenue Card --> */}
                    <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">

                        <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                        </div>

                        <div className="card-body">
                        <h5 className="card-title">Revenue <span>| This Month</span></h5>

                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                            </div>
                            <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                    {/* <!-- End Revenue Card --> */}

                    {/* <!-- Customers Card --> */}
                    <div className="col-xxl-4 col-xl-12">

                    <div className="card info-card customers-card">

                        <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                        </div>

                        <div className="card-body">
                        <h5 className="card-title">Customers <span>| This Year</span></h5>

                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                            </div>
                            <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                            </div>
                        </div>

                        </div>
                    </div>

                    </div>
                    {/* <!-- End Customers Card --> */}

                    {/* <!-- Reports --> */}
                    <div className="col-12">
                    <div className="card">

                        <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                        </div>

                        <div className="card-body">
                        <h5 className="card-title">Reports <span>/Today</span></h5>

                        {/* <!-- Line Chart --> */}
                        <div id="reportsChart"></div>

                        {/* <!-- End Line Chart --> */}

                        </div>

                    </div>
                    </div>
                    {/* <!-- End Reports --> */}

                    {/* <!-- Recent Sales --> */}
                    <div className="col-12">
                    <div className="card recent-sales overflow-auto">

                        <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                        </div>

                        <div className="card-body">
                        <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                        <table className="table table-borderless datatable">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><a href="#">#2457</a></th>
                                <td>Brandon Jacob</td>
                                <td><a href="#" className="text-primary">At praesentium minu</a></td>
                                <td>$64</td>
                                <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2147</a></th>
                                <td>Bridie Kessler</td>
                                <td><a href="#" className="text-primary">Blanditiis dolor omnis similique</a></td>
                                <td>$47</td>
                                <td><span className="badge bg-warning">Pending</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2049</a></th>
                                <td>Ashleigh Langosh</td>
                                <td><a href="#" className="text-primary">At recusandae consectetur</a></td>
                                <td>$147</td>
                                <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2644</a></th>
                                <td>Angus Grady</td>
                                <td><a href="#" className="text-primar">Ut voluptatem id earum et</a></td>
                                <td>$67</td>
                                <td><span className="badge bg-danger">Rejected</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2644</a></th>
                                <td>Raheem Lehner</td>
                                <td><a href="#" className="text-primary">Sunt similique distinctio</a></td>
                                <td>$165</td>
                                <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            </tbody>
                        </table>

                        </div>

                    </div>
                    </div>
                    {/* <!-- End Recent Sales --> */}

                    {/* <!-- Top Selling --> */}
                    <div className="col-12">
                    <div className="card top-selling overflow-auto">

                        <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                        </div>

                        <div className="card-body pb-0">
                        <h5 className="card-title">Top Selling <span>| Today</span></h5>

                        <table className="table table-borderless">
                            <thead>
                            <tr>
                                <th scope="col">Preview</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Sold</th>
                                <th scope="col">Revenue</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                                <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                <td>$64</td>
                                <td className="fw-bold">124</td>
                                <td>$5,828</td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt="" /></a></th>
                                <td><a href="#" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                                <td>$46</td>
                                <td className="fw-bold">98</td>
                                <td>$4,508</td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt="" /></a></th>
                                <td><a href="#" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                                <td>$59</td>
                                <td className="fw-bold">74</td>
                                <td>$4,366</td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt="" /></a></th>
                                <td><a href="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                                <td>$32</td>
                                <td className="fw-bold">63</td>
                                <td>$2,016</td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt="" /></a></th>
                                <td><a href="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                                <td>$79</td>
                                <td className="fw-bold">41</td>
                                <td>$3,239</td>
                            </tr>
                            </tbody>
                        </table>

                        </div>

                    </div>
                    </div>
                    {/* <!-- End Top Selling --> */}

                </div>
                </div>
                {/* <!-- End Left side columns --> */}

                {/* <!-- Right side columns --> */}
                <div className="col-lg-4">

                {/* <!-- Recent Activity --> */}
                <div className="card">
                    <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                    </div>

                    <div className="card-body">
                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

                    <div className="activity">

                        <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div className="activity-content">
                            Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                        </div>
                        </div>
                        {/* <!-- End activity item--> */}

                        <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                        <div className="activity-content">
                            Voluptatem blanditiis blanditiis eveniet
                        </div>
                        </div>
                        {/* <!-- End activity item--> */}

                        <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                        <div className="activity-content">
                            Voluptates corrupti molestias voluptatem
                        </div>
                        </div>
                        {/* <!-- End activity item--> */}

                        <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                        <div className="activity-content">
                            Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                        </div>
                        </div>
                        {/* <!-- End activity item--> */}

                        <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                        <div className="activity-content">
                            Est sit eum reiciendis exercitationem
                        </div>
                        </div>
                        {/* <!-- End activity item--> */}

                        <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                        <div className="activity-content">
                            Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                        </div>
                        </div>
                        {/* <!-- End activity item--> */}

                    </div>

                    </div>
                </div>
                {/* <!-- End Recent Activity --> */}

                {/* <!-- Budget Report --> */}
                <div className="card">
                    <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                    </div>

                    <div className="card-body pb-0">
                    <h5 className="card-title">Budget Report <span>| This Month</span></h5>

                    <div id="budgetChart" className="echart b1"></div>

                    </div>
                </div>
                {/* <!-- End Budget Report --> */}

                {/* <!-- Website Traffic --> */}
                <div className="card">
                    <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                    </div>

                    <div className="card-body pb-0">
                    <h5 className="card-title">Website Traffic <span>| Today</span></h5>

                    <div id="trafficChart" className="echart b1"></div>

                    </div>
                </div>
                {/* <!-- End Website Traffic --> */}

                {/* <!-- News & Updates Traffic --> */}
                <div className="card">
                    <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                    </div>

                    <div className="card-body pb-0">
                    <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

                    <div className="news">
                        <div className="post-item clearfix">
                        <img src="assets/img/news-1.jpg" alt="" />
                        <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                        <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                        </div>

                        <div className="post-item clearfix">
                        <img src="assets/img/news-2.jpg" alt="" />
                        <h4><a href="#">Quidem autem et impedit</a></h4>
                        <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                        </div>

                        <div className="post-item clearfix">
                        <img src="assets/img/news-3.jpg" alt="" />
                        <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                        <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                        </div>

                        <div className="post-item clearfix">
                        <img src="assets/img/news-4.jpg" alt="" />
                        <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                        <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                        </div>

                        <div className="post-item clearfix">
                        <img src="assets/img/news-5.jpg" alt="" />
                        <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                        <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                        </div>

                    </div>
                    {/* <!-- End sidebar recent posts--> */}

                    </div>
                </div>
                {/* <!-- End News & Updates --> */}

                </div>
                {/* <!-- End Right side columns --> */}

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

export default Doctorsavailability;