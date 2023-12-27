import React from "react";
import { BiClinic } from "react-icons/bi";

const Clinic_Appointment = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 me-2" id="exampleModalLabel">
              <BiClinic /> Clinic Appointment
            </h1>
            <p>₹ 300 fees</p>
          </div>
          <div className="modal-body d-flex col-8 mx-2 my-4 border">
            <div className="my-3">
              <p>Book an appointment for Consultation</p>
            </div>
            <h6>Partha Dental Skin Hair</h6>
            <p className="text-success">
              ₹300
              <span className="text-primary">Max 30 mins wait</span>
            </p>
            <p>Marathahalli</p>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Today</h5>
                    <p>15 Slots Available</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Tomorrow</h5>
                    <p>26 Slots Available</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>thu, 28 Dec</h5>
                    <p>10 Slots Available</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div className="mt-2">
              <h5>
                Morning
                <small>2 Slots</small>
              </h5>
              {/* Morning Slot */}
              {/* <Slot time={9} booked={false} />
              <Slot time={10} booked={true} /> */}
              <hr />
              <h5>
                Afternoon
                <small> (4 Slots)</small>
              </h5>
              {/* Afternoon Slots */}
              {/* <Row>
                <Col md={6}>
                  <Slot time={13} booked={false} />
                </Col>
                <Col md={6}>
                  <AddToCalendar
                    eventObject={{
                      start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                      end: new Date(
                        Date.now() + (8 * 24 * 60 * 60 * 1000) / 1.5
                      ),
                      title: "Yoga Session",
                      description: "Join us for a virtual yoga session.",
                    }}
                  />
                </Col>
              </Row> */}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic_Appointment;
