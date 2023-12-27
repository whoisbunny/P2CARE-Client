import React from "react";
import { BiClinic } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Patients_details = () => {
  return (
    <div className="container mt-4 col-lg-6 offset-md-2">
      <div className="col-md-8 border">
        <div className=" mx-2 px-2">
          <div className="pb-2 mb-3 border-bottom">
            <h6 className="fs-5 me-2 d-flex-md-column">
              <BiClinic /> In-Clinic Appointment
            </h6>
          </div>
          <div className="row border-bottom my-2">
            <div className="col-auto me-auto d-flex-inline ">
              <BsCalendar4Event /> On{" "}
              <span className="text-black-50">Dec 27, 2023</span>
            </div>
            <div className="col-auto">
              <CiClock2 /> At <span className="text-black-50">9:30 AM </span>
            </div>
            <Link className="text-primary mt-1">Change Date & Time</Link>
          </div>

          <div className="d-flex py-2 align-items-center border-bottom">
            <div className="me-auto d-flex-block fs-6 text-black-50">
              <img className="img img-fluid " src="#" alt="Dr. Picture" />
              <span className="mx-4">Dr. John Doe</span>
              <p className="mx-4 ">
               Cardio Specialist
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex col-6 mx-2 my-4 "></div>
      </div>
    </div>
  );
};

export default Patients_details;
