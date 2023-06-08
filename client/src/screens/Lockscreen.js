import React from "react";
import "../index.css";
import "../assets/css/style.css";

function Lockscreen() {
    return (
        <>
            <main>
            <div className="container">

            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <div className="d-flex justify-content-center py-4">
                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">ANC</span>
                        </a>
                    </div>
                    {/* <!-- End Logo --> */}

                    <div className="card mb-3">
                        <div className="card-body">
                        <div className="pt-3 pb-2">
                            <h5 className="card-title text-center pb-0 fs-4">Lock Screen</h5>
                            <p className="text-center small mb-0">Enter your password to unlock the screen!</p>
                        </div>
                        <div className="card-body profile-card pt-3 d-flex flex-column align-items-center">
                            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                        </div>
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-12 text-center mb-0">
                            <label for="yourUsername" className="form-label">Login as <b>Username</b></label>
                            </div>
                            <div className="col-12 mb-1">
                            <input type="password" name="password" className="form-control" id="yourPassword" placeholder="Enter your Password" required />
                            <div className="invalid-feedback">Please enter your password!</div>
                            </div>
                            <div className="col-12">
                            <a href="index.html" className="btn btn-primary w-100">Login</a>
                            </div>
                        </form>
                        </div>
                    </div>
                    

                    <div className="credits">
                        Not you?<a href="https://bootstrapmade.com/"> Sign Out</a>
                    </div>

                    </div>
                </div>
                </div>

            </section>

            </div>
        </main>
        {/* <!-- End #main --> */}

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Lockscreen;