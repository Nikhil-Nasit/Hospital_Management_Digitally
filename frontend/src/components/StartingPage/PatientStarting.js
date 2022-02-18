// import Slider from '../UI/Slider';
import React from "react";
import classes from "./PatientStarting.module.css";

const PatientStarting = () => {
  return (
    <React.Fragment>
      <div className={classes.image}>
        <section className={classes.starting}>
          <div>
            <h1 className="text-white" align="center">
              Our Vision and Mission Statements
            </h1>
            <br />
            <br />
            <p className="text-white container">
              The Mission of Lifescape Hospital is to provide compassionate,
              accessible, high quality, cost effective healthcare to the
              community; to promote health; to educate healthcare professionals;
              and to participate in appropriate clinical research.
            </p>
            <br />
            <p className="text-white container">
              Lifescape Hospital will be an innovative, leading regional health
              system dedicated to advancing the health and transforming the
              lives of the people we serve through excellent clinical quality;
              accessible, patient-centered, caring service; and unmatched
              physician and employee commitment.
            </p>
            <br />
            <br />
          </div>
          {/* <Slider></Slider> */}
        </section>
      </div>
    </React.Fragment>
  );
};

export default PatientStarting;
