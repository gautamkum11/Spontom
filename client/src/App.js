import react from "react";
import Addpatient from "./screens/Receptionist/Addpatient";
import Home from "./screens/Home";
import {Route, Routes} from "react-router-dom";
import Doctorsavailability from "./screens/Receptionist/Doctorsavailability";
import Patients from "./screens/Receptionist/Patients";
import Userprofile from "./screens/Receptionist/Userprofile";
import Lockscreen from "./screens/Lockscreen";
import Login from "./screens/Login";
import Viewpatient from "./screens/Receptionist/Viewpatient";
import Bookappointment from "./screens/Receptionist/Bookappointment";
import Bookprocedure from "./screens/Receptionist/Bookprocedure";
import Dashboard from "./screens/Billing/Dashboard";
import Bills from "./screens/Billing/Bills";
import Invoice from "./screens/Billing/Invoice";
import BillingUserprofile from "./screens/Billing/Userprofile";
import Dashboard_assistant from "./screens/Assistant/Dashboard";
import Appointment from "./screens/Assistant/Appointment";
import Bookappointment_Assistant from "./screens/Assistant/Bookappointment";
import Patient_assistant from "./screens/Assistant/Patient";
import Viewpatient_assistant from "./screens/Assistant/Viewpatient";
import Appointment_doctor from "./screens/Doctor/Appointment";
import Bookappointment_doctor from "./screens/Doctor/Bookappointment";
import Confirm_appointment from "./components/Confirm_appointment";
import Paymentsuccessfull from "./components/Paymentsuccessfull";
import Appointment_details from "./screens/Doctor/Appointment_details";
import Assessment from "./screens/Doctor/Assessment";
import Cancelappointment from "./components/Cancelappointment";
import Reschedule from "./components/Reschedule";
import Userprofile_doctor from "./screens/Doctor/Userprofile";
import Setting from "./screens/Doctor/Setting";
import Patients_doctor from "./screens/Doctor/Patients";
import Messaging_doctor from "./screens/Doctor/Messaging";
import Dashboard_doctor from "./screens/Doctor/Dashboard";
import Dashboard_receptionist from "./screens/Receptionist/Dashboard.js";

function App() {
  return (
    <Routes>
      <Route exact path = "/" element = {<Home />} />
      <Route path = "/lockscreen" element  = {<Lockscreen />} />
      <Route path = "/login" element  = {<Login />} />
      <Route path = "/receptionist/dashboard" element  = {<Dashboard_receptionist />} />
      <Route path = "/receptionist/addpatient" element  = {<Addpatient />} />
      <Route path = "/receptionist/doctoravailability" element  = {<Doctorsavailability /> } />
      <Route path = "/receptionist/patients" element  = {<Patients />} />
      <Route path = "/receptionist/userprofile" element  = {<Userprofile />} />
      <Route path = "/receptionist/viewpatient" element  = {<Viewpatient />} />
      <Route path = "/receptionist/bookappointment" element  = {<Bookappointment />} />
      <Route path = "/receptionist/bookprocedure" element  = {<Bookprocedure />} />
      <Route path = "/billing/dashboard" element  = {<Dashboard />} />
      <Route path = "/billing/bills" element  = {<Bills />} />
      <Route path = "/billing/invoice" element  = {<Invoice />} />
      <Route path = "/billing/userprofile" element  = {<BillingUserprofile />} />
      <Route path = "/assistant/dashboard" element  = {<Dashboard_assistant />} />
      <Route path = "/assistant/appointment" element  = {<Appointment />} />
      <Route path = "/assistant/bookappointment" element  = {<Bookappointment_Assistant />} />
      <Route path = "/assistant/patients" element  = {<Patient_assistant />} />
      <Route path = "/assistant/viewpatient" element  = {<Viewpatient_assistant />} />
      <Route path = "/doctor/appointment" element  = {<Appointment_doctor />} />
      <Route path = "/doctor/bookappointment" element  = {<Bookappointment_doctor />} />
      <Route path = "/confirmappointment" element  = {<Confirm_appointment />} />
      <Route path = "/paymentsuccessfull" element  = {<Paymentsuccessfull />} />
      <Route path = "/doctor/appointmentdetails" element  = {<Appointment_details />} />
      <Route path = "/doctor/assessment" element  = {<Assessment />} />
      <Route path = "/cancelappointment" element  = {<Cancelappointment />} />
      <Route path = "/reschedule" element  = {<Reschedule />} />
      <Route path = "/doctor/userprofile" element  = {<Userprofile_doctor />} />
      <Route path = "/doctor/setting" element  = {<Setting />} />
      <Route path = "/doctor/patients" element  = {<Patients_doctor />} />
      <Route path = "/doctor/messaging" element  = {<Messaging_doctor />} />
      <Route path = "/doctor/dashboard" element  = {<Dashboard_doctor />} />
    </Routes>
  );
}

export default App;