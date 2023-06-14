import react from "react";
import Addpatient from "./screens/Receptionist/Addpatient";
import Home from "./screens/Receptionist/Home";
import {Route, Routes} from "react-router-dom";
import Doctorsavailability from "./screens/Receptionist/Doctorsavailability";
import Patients from "./screens/Receptionist/Patients";
import Userprofile from "./screens/Receptionist/Userprofile";
import Lockscreen from "./screens/Receptionist/Lockscreen";
import Login from "./screens/Receptionist/Login";
import Viewpatient from "./screens/Receptionist/Viewpatient";
import Bookappointment from "./screens/Receptionist/Bookappointment";
import Bookprocedure from "./screens/Receptionist/Bookprocedure";

function App() {
  return (
    <Routes>
      <Route exact path = "/" element = {<Home />} />
      <Route path = "/addpatient" element  = {<Addpatient />} />
      <Route path = "/doctoravailability" element  = {<Doctorsavailability /> } />
      <Route path = "/patients" element  = {<Patients />} />
      <Route path = "/userprofile" element  = {<Userprofile />} />
      <Route path = "/lockscreen" element  = {<Lockscreen />} />
      <Route path = "/login" element  = {<Login />} />
      <Route path = "/viewpatient" element  = {<Viewpatient />} />
      <Route path = "/bookappointment" element  = {<Bookappointment />} />
      <Route path = "/bookprocedure" element  = {<Bookprocedure />} />
    </Routes>
  );
}

export default App;