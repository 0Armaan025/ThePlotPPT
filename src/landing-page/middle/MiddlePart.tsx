import React from "react";
import "./middlepart.css";
import Link from "next/link";

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
          <Link href="/get-evidence">
            <button className="getProvedBtn">Get some evidence!</button>
          </Link>
        </div>
        <div className="rightBox">
          <img src="https://cdn.dribbble.com/users/1126935/screenshots/16524076/media/ea5e89630c33cec74d38f2febc6c2b38.png" />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
