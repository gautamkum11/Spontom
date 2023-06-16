import React from "react";
import Sidebar_doctor from "../../components/Sidebar_doctor.js";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import excel from "../../img/excel.png";
import Navbar_doctor from "../../components/Navbar_doctor.js";

function Setting() {
    return (
        <>
            <Navbar_doctor />
            <Sidebar_doctor />
            <main id="main" className="main">

            <div class="pagetitle">
            <h1>Settings</h1>
            </div>
            {/* <!-- End Page Title --> */}

            <section class="section profile">
            <div className="row">

                {/* <div className="col-xl-8"> */}

                <div className="card">
                    {/* <div className="card-body pt-3"> */}
                    {/* <!-- Bordered Tabs --> */}
                    <ul className="nav nav-tabs nav-tabs-bordered">

                        <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Users</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Data Export</button>
                        </li>

                    </ul>
                    <div className="tab-content pt-2" style = {{width: "100%"}}>

                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <div style = {{display: "flex",width:"100%"}}>
                        <form style = {{width: "50%", padding: "1rem"}}>
                            <label for="fullName" className="actionfont" style = {{fontSize: "1.5rem",marginBottom: "1rem"}} >Invite a new user to access your account</label>
                            <p className = "viewans" style = {{margin: "0 0 1rem 0", fontSize: "1rem"}}>Choose a user role to get started</p>
                            <div className="row mb-3">
                            <label for="fullName" className="col-md-4 col-lg-3 col-form-label actionfont">Full Name</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Email" className="col-md-4 col-lg-3 col-form-label actionfont">Email</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com" />
                            </div>
                            </div>

                            <div className="row mb-3">
                            <label for="Twitter" className="col-md-4 col-lg-3 col-form-label actionfont">Position</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="twitter" type="text" className="form-control" id="Twitter" value="142898" />
                            </div>
                            </div>

                            <div style = {{display: "flex" ,marginTop: "1rem"}}>
                                <label className = "col-md-4 col-lg-3 col-form-label actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Role : </label>
                                <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style = {{display: "flex",flexDirection: "column", paddingLeft: "1rem"}}
                                >
                                    <FormControlLabel style = {{color:"black"}} value="morning" control={<Radio />} label="Manage Appointments & Manage Schedule" />
                                    <FormControlLabel style = {{color:"black"}} value="afternoon" control={<Radio />} label="Viewer" />
                                </RadioGroup>
                                </FormControl>
                            </div>
                            <div style = {{display: "flex",justifyContent: "space-between",width: "50%", marginTop: "1rem"}}>
                                <button className = "actionbutton" style = {{width:"40%"}}>Cancel</button>
                                <button className = "actionbutton" style = {{width:"40%"}}>Invite User</button>
                            </div>
                        </form>
                        <div style = {{borderLeft:" 1px solid black",width: "50%",margin: "1rem",padding: "1rem 5rem 1rem 3rem"}}>
                            <label for="fullName" className="col-md-4 col-lg-3 col-form-label actionfont">Permissions</label>
                            <ul>
                                <li style = {{marginBottom: "1rem",height: "2rem",borderBottom: "1px solid grey"}}>
                                    <div style = {{display: "flex",justifyContent: "space-between"}}>
                                        <p className = "viewlabel">Appointments</p>
                                        <p className = "viewlabel">Full Access</p>
                                    </div>
                                </li>
                                <li style = {{marginBottom: "1rem",height: "2rem",borderBottom: "1px solid grey"}}>
                                    <div style = {{display: "flex",justifyContent: "space-between"}}>
                                        <p className = "viewlabel">Messaging</p>
                                        <p className = "viewlabel">Full Access</p>
                                    </div>
                                </li>
                                <li style = {{marginBottom: "1rem",height: "2rem",borderBottom: "1px solid grey"}}>
                                    <div style = {{display: "flex",justifyContent: "space-between"}}>
                                        <p className = "viewlabel">Profile Details</p>
                                        <p className = "viewlabel">Full Access</p>
                                    </div>
                                </li>
                                <li style = {{marginBottom: "1rem",height: "2rem",borderBottom: "1px solid grey"}}>
                                    <div style = {{display: "flex",justifyContent: "space-between"}}>
                                        <p className = "viewlabel">Data Export</p>
                                        <p className = "viewlabel">Full Access</p>
                                    </div>
                                </li>
                                <li style = {{marginBottom: "1rem",height: "2rem",borderBottom: "1px solid grey"}}>
                                    <div style = {{display: "flex",justifyContent: "space-between"}}>
                                        <p className = "viewlabel">User Management</p>
                                        <p className = "viewlabel">Full Access</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>

                        </div>

                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit" style = {{margin: "0 1rem 1rem 1rem"}}>
                            <label for="fullName" className="actionfont" style = {{fontSize: "1.5rem", color : "black"}} >Export your data</label>
                            <p className = "viewans" style = {{margin: "1rem 0 1rem 0", fontSize: "1rem"}}>Export and Download data</p>
                            <div style = {{display: "flex",justifyContent: "space-between",width: "50%", marginTop: "1rem"}}>
                                <div style = {{height: "8rem",display: "flex" ,flexDirection :"column",justifyContent: "center",alignItems: "center" ,border: "2px solid blue",padding: "1rem"}}>
                                    <img src = {excel} style = {{width : "50px", height : "50px"}}></img>
                                    <button style = {{width:"100%" ,height: "5rem",border: "none",background: "none",color: "black"}}>Export all Transactions for Excel</button>
                                </div>
                                <div style = {{height: "8rem",display: "flex" ,flexDirection :"column",justifyContent: "center",alignItems: "center" ,border: "2px solid blue",padding: "1rem"}}>
                                    <img src = {excel} style = {{width : "50px", height : "50px"}}></img>
                                    <button style = {{width:"100%" ,height: "5rem",border: "none",background: "none",color: "black"}}>Export all Transactions as CSV</button>
                                </div>
                                {/* <button className = "actionbutton" style = {{width:"40%" ,height: "5rem"}}>Export all Transactions as CSV</button> */}
                            </div>
                        </div>

                    </div>
                    {/* <!-- End Bordered Tabs --> */}

                    </div>
                {/* </div> */}

                {/* </div> */}
            </div>
            </section>

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

export default Setting;