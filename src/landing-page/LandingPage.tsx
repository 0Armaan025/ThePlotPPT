import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./landingpage.css";
import MiddlePart from "./middle/MiddlePart";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="landingPageDiv">
        <MiddlePart />
      </div>
    </>
  );
};

export default LandingPage;
