import React from "react";
import img from "../img/TMS-2--min.webp";
import {Helmet} from 'react-helmet';

function Home(){
    return (
        <>
            <Helmet>
                <link href="css/bootstrap.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <script src="js/main.js"></script>
            </Helmet>
            <main>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="center-content">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                                <h1 className="display-5 mb-0">Transforming Mental Health with Deep TMS System</h1>
                            </div>
                            <h4 className="text-body mb-4">We believe that happiness begins in your mind, and we strive to provide you with the best possible treatment to achieve it.</h4>
                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Deep TMS System</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Non-Invasive Treatment</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Comfortable Environment</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Comprehensive Care</h5>
                                </div>
                            </div>
                            <a href="/login" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Patient Login</a>
                            <a href="/" className="btn btn-secondary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Staff Login</a>
                        </div>
                        <div className="col-lg-5" style = {{minHeight : "500px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-75 rounded wow zoomIn" data-wow-delay="0.9s" src = {img} style={{objectFit: "cover"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>

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

            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    );
}

export default Home;