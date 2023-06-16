import React,{useState} from "react";   
import profileimg from "../../assets/img/profile-img.jpg";
import {useNavigate}from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-date-picker';
import Navbar_doctor from "../../components/Navbar_doctor.js";

function Assessment() {
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());


    const findings = [
        { value: 'Finding1', label: 'Finding1' },
        { value: 'Finding2', label: 'Finding2' },
        { value: 'Finding3', label: 'Finding3' }
    ];
    const symptoms = [];

    return (
        <>
            <Navbar_doctor />
            <div className = "viewp1">
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
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Assessments</button>
                        </li>

                        <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Prescriptions</button>
                        </li>
                    </ul>
                    <div className="tab-content pt-2">

                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <div className="card-body" style = {{margin : "1rem 0 0 0"}}>
                            <p className = "actionfont" style = {{margin: "0rem"}}>Source of Information</p>
                            <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                style = {{display: "flex",justifyContent: "space-around"}}
                            >
                                <FormControlLabel value="morning" control={<Radio />} label="Self" />
                                <FormControlLabel value="afternoon" control={<Radio />} label="Self + informant(relation with patient)" />
                            </RadioGroup>
                            </FormControl>
                            <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Findings</p>
                            <Select
                                isMulti
                                name="colors"
                                options={findings}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder = "Search for Findings"
                            />
                            <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Symptoms</p>
                            <CreatableSelect isClearable isMulti options={symptoms} />
                            <div>
                                <div style = {{display: "flex" ,marginTop: "1rem"}}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Whether currently on any psychiatric treatment : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around", paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                            </div>
                            <div style = {{display: "flex" }}>
                                <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Any Past history of psychiatric illness and treatment : </p>
                                <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style = {{display: "flex",justifyContent: "space-around", paddingLeft: "1rem"}}
                                >
                                    <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                </RadioGroup>
                                </FormControl>
                            </div>
                            <div style = {{display: "flex" }}>
                                <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Any Past history of TMS/TDCS/ECT/Biofeedback : </p>
                                <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style = {{display: "flex",justifyContent: "space-around", paddingLeft: "1rem"}}
                                >
                                    <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                </RadioGroup>
                                </FormControl>
                            </div>
                            <div>
                                <div style = {{display: "flex" }}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Any Current Physical Co-morbidities and ongoing treatments : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around", paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                            </div>
                            <div>
                                <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Menstrual History : </p>
                                <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style = {{display: "flex",justifyContent: "space-around"}}
                                >
                                    <FormControlLabel value="morning" control={<Radio />} label="Regular cycles" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="Irregular cycles" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="Menopause" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="N/A" />
                                </RadioGroup>
                                </FormControl>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                            </div>
                            <div>
                                <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Substance Use History : </p>
                                <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style = {{display: "flex",justifyContent: "space-around"}}
                                >
                                    <FormControlLabel value="morning" control={<Radio />} label="Current Use" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="Past Use" />
                                    <FormControlLabel value="afternoon" control={<Radio />} label="No Substance Use" />
                                </RadioGroup>
                                </FormControl>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                            </div>
                            <div>
                                <div style = {{display: "flex" }}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Current presence of any Implants/Medical devices in the body : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around", paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                            </div>
                            <div>
                                <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Additional Notes : </p>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                            </div>
                            <div style = {{display: "flex",justifyContent: "space-between",width: "50%", marginTop: "1rem"}}>
                                <button className = "actionbutton" style = {{width:"40%"}}>Save</button>
                                <button className = "actionbutton" style = {{width:"40%"}}>Sign</button>
                            </div>
                        </div>
                        </div>

                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                        <div className="card-body">
                            <div>
                                <div style = {{display: "flex"}}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Medicine Name : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around",paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <CreatableSelect isClearable isMulti placeholder = "Medicine Name" options={symptoms} />
                            </div>
                            <table className="table datatable" style = {{border: "1px solid black",marginTop: "1rem", borderRadius: "5px"}}>
                                <thead style = {{border: "1px solid black"}}>
                                    <tr>
                                    <th scope="col">Medicine Name(Generic Name)</th>
                                    <th scope="col">Dose</th>
                                    <th scope="col">Frequency</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody style = {{border: "1px solid black"}}>
                                    <tr>
                                        <td>Medicine Name(Generic Name)</td>
                                        <td>10 mg</td>
                                        <td>1-1-1</td>
                                        <td>30 Days</td>
                                        <td>
                                            <input></input>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Medicine Name(Generic Name)</td>
                                        <td>10 mg</td>
                                        <td>1-1-1</td>
                                        <td>30 Days</td>
                                        <td>
                                            <input></input>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <div style = {{display: "flex"}}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Advice for Counselling : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around",paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <div style = {{display: "flex"}}>
                                    <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px"}} placeholder= "Details" rows="3" cols="60"></textarea>
                                    <div style = {{width:"50%",marginTop: "1rem"}}>
                                        <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Refer to </p>
                                        <input type = "text" placeholder = "Dr. Doctor Name" style = {{width: "100%",height:"2rem"}}></input>
                                    </div> 
                                </div>
                            </div>
                            <div>
                                <div style = {{display: "flex"}}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Advice for Procedure : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around",paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="rTMS" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="BioFeedback" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="TDS" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                            <div style = {{display: "flex"}}>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px",width: "50%"}} placeholder= "Special Notes for Patient" rows="3"></textarea>
                                <textarea style = {{margin:"0 1rem 0 0", borderRadius: "5px",padding: "10px",width: "50%"}} placeholder= "Internal Notes" rows="3"></textarea>
                            </div>
                            <div>
                                <div style = {{display: "flex"}}>
                                    <p className = "actionfont" style = {{margin: "0.5rem 0 0.5rem 0"}}>Investigations : </p>
                                    <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style = {{display: "flex",justifyContent: "space-around",paddingLeft: "1rem"}}
                                    >
                                        <FormControlLabel value="morning" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="afternoon" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    </FormControl>
                                </div>
                                <CreatableSelect isClearable isMulti placeholder = "Search Investigations" options={symptoms} />
                            </div>
                            <div style = {{display: "flex", marginTop: "1rem", alignItems: "center"}}>
                                <p className = "actionfont" style = {{ width :"20%"}}>Follow up Date : </p>
                                <DatePicker className = "react-date-picker" onChange={onChange} value={value} />
                            </div>
                            <div className = "actionbox6" style = {{padding:"2rem 1rem 0.5rem 1rem"}}>
                                <button className = "actionbutton" style = {{width : "40%"}}>Create Prescription</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Assessment;