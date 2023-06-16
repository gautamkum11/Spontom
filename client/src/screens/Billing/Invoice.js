import React from "react";
import "./billing.css";
import close from "../../img/close.png";
import logo from "../../assets/img/logo.png";

function Invoice() {
    return (
        <>
            <div className = "billingbox">
            <div className = "billingbox1"> 
                <div className = "billingbox2">
                    <p className = "viewfont" style = {{fontSize : "1.5rem"}}>Patient Invoice</p>
                    <a style = {{cursor: "pointer"}} href = "/billing/bills"><img src = {close} className = "billingimg"></img></a>
                </div>
                <div className = "billingbox3">
                    <div>
                        <img className = "billingimg1" src = {logo}></img>
                        <p className = "viewfont" style = {{fontSize : "1.2rem",margin: "0"}}>Asha Neuromodulation Clinic</p>
                        <p className = "viewfont" style = {{fontSize : "1rem",margin: "0"}}>Address :</p>
                        <p className = "viewans" style = {{fontSize : "1rem"}}>4th Floor, Fantasy Square Building, Biodiversity Circle,Gachibowli, Hyderabad, Telangana 500032</p>
                    </div>
                    <div style = {{width: "50%"}} >
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Invoice no :</p>
                            <p className = "billingfontans">#1001</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Issue Date :</p>
                            <p className = "billingfontans">22nd Nov 2022</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Email :</p>
                            <p className = "billingfontans">info@ashaclinic.com</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Phone :</p>
                            <p className = "billingfontans">(91) 96666 55554</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Website :</p>
                            <p className = "billingfontans">ashaclinic.com</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Patient :</p>
                            <p className = "billingfontans">Patient Name</p>
                        </div>
                    </div>
                </div>
                <div className = "billingbox4">
                    <p className = "viewfont" style = {{fontSize : "1.2rem",margin: "0"}}>Invoice</p> 
                    <p className = "viewfont" style = {{fontSize : "1rem",margin: "0"}}>Consultation</p>
                    <div style = {{display : "flex",columnGap:"1rem"}}>
                        <p className = "billingfont">Dr. Name :</p>
                        <p className = "billingfontans">Dr. Name</p>
                    </div>
                    <table className="table datatable" style = {{border: "1px solid black",marginTop: "1rem", borderRadius: "5px"}}>
                        <thead style = {{border: "1px solid black"}}>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Item</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody style = {{border: "1px solid black"}}>
                            <tr>
                                <td>1</td>
                                <td>Consultation (Dr. Doctor Name)</td>
                                <td>1</td>
                                <td>Rs 2000</td>
                                <td>Rs 2000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style ={{display: "flex",flexDirection: "column",marginLeft: "75%"}}>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Subtotal :</p>
                            <p className = "billingfontans">Rs 2000</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Taxes :</p>
                            <p className = "billingfontans">0</p>
                        </div>
                        <div style = {{display : "flex",columnGap:"1rem"}}>
                            <p className = "billingfont">Total :</p>
                            <p className = "billingfontans">Rs 2000</p>
                        </div>
                    </div>
                </div>
                <div className = "billingbox5">
                    <div style = {{display : "flex",columnGap:"1rem"}}>
                        <p className = "billingfont">Customer Services :</p>
                        <p className = "billingfontans">(+91) 966666 55558</p>
                    </div>
                    <p className = "viewfont" style = {{fontSize : "1rem",margin: "0",color: "blue"}}>Terms & Conditions</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default Invoice;