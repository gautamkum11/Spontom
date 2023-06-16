import React from "react";
import "../index.css";
import img from "../img/TMS-2--min.webp";
import check from "../img/check.png";

function Home(){
    return (
        <>
            <div className="home1">
                <div className="home2">
                    <div className="home3">
                        <div className="home4">
                            <div className="section-title mb-4">
                                <h1 className="home7">Transforming Mental Health with Deep TMS System</h1>
                            </div>
                            <h4 className="home8">We believe that happiness begins in your mind, and we strive to provide you with the best possible treatment to achieve it.</h4>
                            <div className="home9">
                                <div className="home10">
                                    <div style ={{display: "flex"}}>
                                        <img src = {check} className="homecheckimg"></img>
                                        <h5 className="home11">Deep TMS System</h5>
                                    </div>
                                    <div style ={{display: "flex"}}>
                                        <img src = {check} className="homecheckimg"></img>
                                        <h5 className="home11">Non-Invasive Treatment</h5>
                                    </div>
                                </div>
                                <div className="home10">
                                    <div style ={{display: "flex"}}>
                                        <img src = {check} className="homecheckimg"></img>
                                        <h5 className="home11">Comfortable Environment</h5>
                                    </div>
                                    <div style ={{display: "flex"}}>
                                        <img src = {check} className="homecheckimg"></img>
                                        <h5 className="home11">Comprehensive Care</h5>
                                    </div>
                                </div>
                            </div>
                            <div className = "home13">
                                <a href = "/login">
                                    <button className = "home12">Patient Login</button>
                                </a>
                                <a href = "/">
                                    <button className = "home14">Staff Login</button>
                                </a>
                            </div>
                        </div>
                        <div className="home15">
                            {/* <div className="position-relative h-100"> */}
                                <img className="homeimg" data-wow-delay="0.9s" src = {img} style={{objectFit: "cover"}} />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{position: "fixed", bottom: "0", width: "100%"}}>
                <div className="container-fluid text-light py-4" style={{background: "#051225"}}>
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-md-6 text-center text-md-start">
                                <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">ANC</a>. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://spontom.com">Created by Spontom</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;