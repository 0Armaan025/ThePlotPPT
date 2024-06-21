import React from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePartDiv">
      <div className="boxes">
        <div className="leftBox">
          <h4 className="headlineText" style={{ fontFamily: "Poppins" }}>
            Let's add some
          </h4>

          <h4 className="headlineText" style={{ fontFamily: "Poppins" }}>
            real evidence! 🤓
          </h4>
          <p>
            Conspiracy theories are theories which many people believe are true,
            whereas others people no it's not true, you dumb person.
          </p>
          <br />
          <button className="getProvedBtn">Get some evidence!</button>
        </div>
        <div className="rightBox"></div>
      </div>
    </div>
  );
};

export default MiddlePart;
