import React from "react";
import data from "../../data/patient.json";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar_Assistant from "../../components/Sidebar_Assistant";

function Patient_assistant() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Sidebar_Assistant />
            <main id="main" className="main">

            <div className="pagetitle a2" >
            <div>
                <h1>Patient List</h1>
                <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Patient List</li>
                </ol>
                </nav>
            </div>

            <div>
                <a className="btn btn-primary a3" href = "/receptionist/addpatient"><i className="bi bi-person-plus"></i>  Add Patient</a> 
            </div>


            </div> 



            <section className="section">
                <div className="row">
                <div className="col-lg-12">
                    
                    <div className="card">
                    <div className="card-body">
                        
                        <div className="search-bar" style = {{padding: "1rem"}}>
                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" style = {{width : "50%",border : "1px solid rgba(1, 41, 112, 0.2)", borderRadius: "3px"}} />
                            <button type="submit" title="Search" style = {{marginLeft:"-30px", background: "none", border : "0px", padding : "0px"}}><i className="bi bi-search"></i></button>
                        </form>
                        </div>
                    
                        {/* <!-- Table with stripped rows --> */}
                        <table className="table datatable">
                        <thead>
                            <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">MR Number</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Last Consultation</th>
                            <th scope="col">Phone Number</th>
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
                                    <td>{item.Gender}</td>
                                    <td>{item.Consultation}</td>
                                    <td>{item.phone}</td>
                                    <td className = "databutton">
                                        <button className = "databutton1" onClick = {() => navigate("/assistant/viewpatient")}>View</button>
                                        <button className = "databutton2" onClick = {() => navigate("/assistant/viewpatient")}>Edit</button>
                                    </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
                        {/* <!-- Right/End Aligned Pagination --> */}
                    <nav aria-label="Page navigation example">
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
                    </nav>

                        
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

export default Patient_assistant;