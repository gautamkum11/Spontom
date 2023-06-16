import React,{useEffect,useState} from "react";
import "../../index.css";
import Navbar from "../../components/Navbar.js";
import Sidebar from "../../components/Sidebar_Receptionist";
// import Avatar from "../../components/Avatar";
// import ReactDatePicker from "react-date-picker";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import { Button, Col, Form, Modal, Nav, Row } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
// import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {
    calendarEvents,
    birthdayEvents,
    holidayEvents,
    discoveredEvents,
    meetupEvents,
    otherEvents
  } from "../../data/CalendarEvents";


function Doctorsavailability() {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.classList.add('app-calendar');
        return () => {
          document.body.classList.remove('app-calendar');
        }
      }, []);
    
      const [startDate, setStartDate] = useState(new Date());
    
      // toggle sidebar calendar
      const [isSidebarShow, setSidebarShow] = useState(false);
    
      // Modal
      const [modalShow, setModalShow] = useState(false);
      const handleModalClose = () => setModalShow(false);
      const handleModalShow = () => setModalShow(true);
    
    return (
        <>
            <Navbar />
            {/* <Sidebar /> */}
      <div className={"main main-calendar" + (isSidebarShow ? " show" : "")} style = {{marginTop: "5rem"}}>
        <div className="calendar-sidebar">
          <PerfectScrollbar className="sidebar-body">
            <div className="d-grid mb-3">
              <Button variant="primary" onClick={handleModalShow}>Create New Event</Button>
            </div>

            <div className="mb-5"></div>

            <h5 className="section-title section-title-sm mb-4">All Doctors</h5>
            <div>
              <div style = {{display: "flex", alignItems: "center", columnGap: "1rem"}}>
                <div style ={{backgroundColor :"red", width : "1rem" , height: "1rem", borderRadius: "50%"}}></div>
                <p className = "actionfont">Dr.Doctor 1</p>
              </div>
              <div style = {{display: "flex",alignItems: "center", columnGap: "1rem"}}>
                <div style ={{backgroundColor :"blue", width : "1rem" , height: "1rem", borderRadius: "50%"}}></div>
                <p className = "actionfont">Dr.Doctor 2</p>
              </div>
              <div style = {{display: "flex",alignItems: "center", columnGap: "1rem"}}>
                <div style ={{backgroundColor :"green", width : "1rem" , height: "1rem", borderRadius: "50%"}}></div>
                <p className = "actionfont">Dr.Doctor 3</p>
              </div>
              <div style = {{display: "flex",alignItems: "center", columnGap: "1rem"}}>
                <div style ={{backgroundColor :"yellow", width : "1rem" , height: "1rem", borderRadius: "50%"}}></div>
                <p className = "actionfont">Dr.Doctor 4</p>
              </div>
              <div style = {{display: "flex",alignItems: "center", columnGap: "1rem"}}>
                <div style ={{backgroundColor : "grey", width : "1rem" , height: "1rem", borderRadius: "50%"}}></div>
                <p className = "actionfont">Dr.Doctor 5</p>
              </div>
            </div>
            <div style = {{marginTop: "22rem"}}>
              <button className = "actionbutton" onClick = {() => {navigate("/receptionist/dashboard")}}>Back</button>
            </div>

          </PerfectScrollbar>
        </div>
        <div className="calendar-body">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              "left": "custom1 prev,next today",
              "center": "title",
              "right": "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            eventSources={[
              calendarEvents,
              birthdayEvents,
              holidayEvents,
              discoveredEvents,
              meetupEvents,
              otherEvents
            ]}
            customButtons={
              {
                custom1: {
                  icon: "chevron-left",
                  click: function () {
                    setSidebarShow(!isSidebarShow);
                  }
                }
              }
            }
          />

          <Modal className="modal-event" show={modalShow} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create New Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <Form.Label>Event Title:</Form.Label>
                <Form.Control type="text" placeholder="Enter title of event" />
              </div>
              <div className="mb-3">
                <Form.Check type="radio" name="etype" inline label="Event" checked />
                <Form.Check type="radio" name="etype" inline label="Reminder" />
              </div>
              <Row className="g-3 mb-3">
                <Col xs="7" md="8">
                  <Form.Label>Start Date:</Form.Label>
                  <Form.Control type="text" placeholder="Choose date" />
                </Col>
                <Col>
                  <Form.Label>Start Time:</Form.Label>
                  <Form.Select>
                    <option value="">Choose time</option>
                    <option value="12:00AM">12:00AM</option>
                    <option value="12:15AM">12:15AM</option>
                    <option value="12:30AM">12:30AM</option>
                    <option value="12:45AM">12:45AM</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="g-3 mb-3">
                <Col xs="7" md="8">
                  <Form.Label>End Date:</Form.Label>
                  <Form.Control type="text" placeholder="Choose date" />
                </Col>
                <Col>
                  <Form.Label>End Time:</Form.Label>
                  <Form.Select>
                    <option value="">Choose time</option>
                    <option value="12:00AM">12:00AM</option>
                    <option value="12:15AM">12:15AM</option>
                    <option value="12:30AM">12:30AM</option>
                    <option value="12:45AM">12:45AM</option>
                  </Form.Select>
                </Col>
              </Row>
              <div>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Write some description (optional)" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="" className="btn-white" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleModalClose}>
                Add Event
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
        </>
    );
}

export default Doctorsavailability;