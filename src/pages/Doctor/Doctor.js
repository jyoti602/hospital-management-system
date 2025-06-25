import React from "react";
import "./Doctor.css";
const Doctor = () => {
  return (
      <div className="Our-Doctors">
        <h1 style={{ textAlign: "center" }}>Our Experienced Doctors</h1>
        <div className="doctor-image">
          <div className="dr-img">
            <img src={"../../images/doctorA.jpg"} alt="Dr. Anandi Gopal Joshi" height="350px" />
            <p>Dr. Anandi Gopal Joshi</p>
            <p>Gynecologist</p>
          </div>
          <div className="dr-img">
            <img src={"../../images/doctorB.jpg"} alt="Dr. Jamase Anderson" height="350px" />
            <p>Dr. Jamase Anderson</p>
            <p>General Physician</p>
          </div>
          <div className="dr-img">
            <img src={"../../images/doctorC.jpg"} alt="Dr. Goss Magazine" height="350px" />
            <p>Dr. Goss Magazine</p>
            <p>Urologist</p>
          </div>
          <div className="dr-img">
            <img src={"../../images/doctorD.jpg"} alt="Dr. Michael Thompson" height="350px" />
            <p>Dr. Michael Thompson</p>
            <p>Ophthalmologist</p>
          </div>
        </div>
      </div>
  );
};

export default Doctor;
