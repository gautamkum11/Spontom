import React from "react";
import Navbar from "../../components/Navbar.js";
import Sidebar_Billing from "../../components/Sidebar_Billing";
import {useNavigate} from "react-router-dom";
import data from "../../data/billingdata.json";

function Bills() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Sidebar_Billing />
            <main id="main" className="main">

            <div className="pagetitle a2" >
            <div style = {{padding: "1rem"}}>
                <h1>Billing</h1>
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
                            <th scope="col">Invoice</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Transaction ID</th>
                            <th scope="col">Generated Data</th>
                            <th scope="col">Mode</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => {
                                return (
                                    <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.invoice}</td>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.transid}</td>
                                    <td>{item.date}</td>
                                    <td>{item.Mode}</td>
                                    <td>{item.status}</td>
                                    <td className = "databutton">
                                        <button className = "databutton1" onClick = {() => navigate("/billing/invoice")}>View</button>
                                        <button className = "databutton2" onClick = {() => navigate("/billing/bills")}>Print</button>
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

export default Bills;