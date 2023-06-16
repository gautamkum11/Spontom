import React,{useState} from "react";
import "../../index.css";
import logoimg from "../../assets/img/logo.png";
import data from "../../data/appointment.json";
import data1 from "../../data/procedure.json";
import data3 from "../../data/billing.json";
import profileimg from "../../assets/img/profile-img.jpg";
import Appointmentdetails from "../../components/Appointmentdetails";
import {useNavigate}from "react-router-dom";

function Viewpatient_assistant() {
    const navigate = useNavigate();
    const [isshown,setisshown] = useState(false);

    const closeaction = (val) => {
        setisshown(val);
    }

    const handleaction = () => {
        if(isshown === true)
        setisshown(false);
        else 
        setisshown(true);
    }

    return (
        <>  
             <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <img src={logoimg} alt="" />
                <span className="d-none d-lg-block">ANC</span>
            </a>
            {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
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

            {/* <li className="nav-item dropdown"></li>
                <button onclick="toggleFullscreen()" type="button" className="icon" data-bs-toggle="fullscreen">
                <i className="bi-arrows-fullscreen"></i>
            </button>  */}


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
                    <img src={profileimg} alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">Receptionist</span>
                </a>
                {/* <!-- End Profile Image Icon --> */}

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
            <div className = "viewp1">
                {isshown && <Appointmentdetails name = {isshown} oncheck = {closeaction} />}
                <div className = "viewp1-1">
                    <div className = "viewp2">
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
                <div className= "viewp3">
                    <div className="card-body pt-3">
                    {/* <!-- Bordered Tabs --> */}
                    <ul className="nav nav-tabs nav-tabs-bordered">

                        <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Appointments</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Procedures</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Billing</button>
                        </li>
                    </ul>
                    <div className="tab-content pt-2">

                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                <div className="card-body">
                                    

                                    <div style = {{display: "flex", justifyContent : "space-between"}}>
                                        <div className="search-bar" style = {{padding: "1rem"}}>
                                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" style = {{width : "100%",border : "1px solid rgba(1, 41, 112, 0.2)", borderRadius: "3px"}} />
                                            <button type="submit" title="Search" style = {{marginLeft:"-30px", background: "none", border : "0px", padding : "0px"}}><i className="bi bi-search"></i></button>
                                        </form>
                                        </div>
                                        <div style = {{display: "flex",alignItems: "center",columnGap: "1rem"}}>
                                            <button className = "viewbutton" onClick = {() => navigate("/receptionist/bookappointment")}>New Appointment</button>
                                            <button className = "viewbutton">Upcoming</button>
                                            <button className = "viewbutton">History</button>
                                        </div>
                                    </div>
                                
                                    {/* <!-- Table with stripped rows --> */}
                                    <table className="table datatable">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">MR Number</th>
                                        <th scope="col">Patient Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Appointment Time</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col">Consultant Name</th>
                                        <th scope="col">Billing</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, index) => {
                                            return (
                                                <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{item.MrNumber}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.Age}</td>
                                                <td>{item.Appointmenttime}</td>
                                                <td>{item.Mode}</td>
                                                <td>{item.Consultantname}</td>
                                                <td>{item.billing}</td>
                                                <td className = "databutton">
                                                    <button className = "viewbutton1" onClick = {handleaction}>View</button>
                                                </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    </table>
                                    {/* <!-- Right/End Aligned Pagination --> */}
                                {/* <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                    </ul>
                                </nav> */}
                                </div>

                        </div>

                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                        <div className="card-body">
                                    

                                    <div style = {{display: "flex", justifyContent : "space-between"}}>
                                        <div className="search-bar">
                                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" style = {{width : "100%",border : "1px solid rgba(1, 41, 112, 0.2)", borderRadius: "3px"}} />
                                            <button type="submit" title="Search" style = {{marginLeft:"-30px", background: "none", border : "0px", padding : "0px"}}><i className="bi bi-search"></i></button>
                                        </form>
                                        </div>
                                        <div style = {{display: "flex",alignItems: "center",columnGap: "1rem"}}>
                                            <button className = "viewbutton" onClick = {() => navigate("/receptionist/bookprocedure")}>Book Procedure</button>
                                            <button className = "viewbutton">Upcoming</button>
                                            <button className = "viewbutton">History</button>
                                        </div>
                                    </div>
                                
                                    {/* <!-- Table with stripped rows --> */}
                                    <table className="table datatable">
                                    <thead>
                                        <tr>
                                        <th scope="col">OP Number</th>
                                        <th scope="col">Appointment Date</th>
                                        <th scope="col">Procedure</th>
                                        <th scope="col">Prototcol</th>
                                        <th scope="col">Symptoms</th>
                                        <th scope="col">Billing</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data1 && data1.map((item) => {
                                            return (
                                                <tr>
                                                <td>{item.OpNumber}</td>
                                                <td>{item.Appointmentdate}</td>
                                                <td>{item.Procedure}</td>
                                                <td>{item.Protocol}</td>
                                                <td>{item.symptoms}</td>
                                                <td>{item.billing}</td>
                                                <td className = "databutton">
                                                    <button className = "viewbutton1" onClick = {handleaction}>View</button>
                                                </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    </table>
                                    {/* <!-- Right/End Aligned Pagination --> */}
                                {/* <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                    </ul>
                                </nav> */}
                                </div>

                        </div>

                        <div className="tab-pane fade pt-3" id="profile-settings">
                        <div className="card-body">
                                    

                                    <div style = {{display: "flex", justifyContent : "space-between"}}>
                                        <div className="search-bar">
                                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" style = {{width : "100%",border : "1px solid rgba(1, 41, 112, 0.2)", borderRadius: "3px"}} />
                                            <button type="submit" title="Search" style = {{marginLeft:"-30px", background: "none", border : "0px", padding : "0px"}}><i className="bi bi-search"></i></button>
                                        </form>
                                        </div>
                                        <div style = {{display: "flex",alignItems: "center",columnGap: "1rem"}}>
                                            <button className = "viewbutton" onClick = {() => navigate("/receptionist/bookprocedure")}>Book Procedure</button>
                                            <button className = "viewbutton">Upcoming</button>
                                            <button className = "viewbutton">History</button>
                                        </div>
                                    </div>
                                
                                    {/* <!-- Table with stripped rows --> */}
                                    <table className="table datatable">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">MR Number</th>
                                        <th scope="col">Patient Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Appointment Time</th>
                                        <th scope="col">Payment for</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col">Billing</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data3 && data3.map((item, index) => {
                                            return (
                                                <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{item.MrNumber}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.Age}</td>
                                                <td>{item.Appointmenttime}</td>
                                                <td>{item.paymentfor}</td>
                                                <td>{item.Mode}</td>
                                                <td>{item.billing}</td>
                                                <td className = "databutton">
                                                    <button className = "viewbutton1" onClick = {handleaction}>View</button>
                                                </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    </table>
                                    {/* <!-- Right/End Aligned Pagination --> */}
                                {/* <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                    </ul>
                                </nav> */}
                                </div>

                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Viewpatient_assistant;