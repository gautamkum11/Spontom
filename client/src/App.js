import react from "react";
import Addpatient from "./screens/Addpatient";
import Home from "./screens/Home";
import {Route, Routes} from "react-router-dom";
import Doctorsavailability from "./screens/Doctorsavailability";
import Patients from "./screens/Patients";
import Userprofile from "./screens/Userprofile";
import Lockscreen from "./screens/Lockscreen";
import Login from "./screens/Login";

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
    </Routes>
  );
}

export default App;