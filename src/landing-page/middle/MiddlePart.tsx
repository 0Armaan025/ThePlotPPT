import React from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePartDiv">
      <div className="boxes flex flex-row">
        <div className="leftBox">
          <h3
            className="font-bold text-[4rem]"
            style={{ fontFamily: "Poppins" }}
          >
            Let the conspiracy
          </h3>

          <h4
            className="font-bold text-[4rem]"
            style={{ fontFamily: "Poppins" }}
          >
            Be True!
          </h4>
        </div>
        <div className="rightBox"></div>
      </div>
    </div>
  );
};

export default MiddlePart;
