import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./landingpage.css";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="landingPageDiv"></div>
    </>
  );
};

export default LandingPage;
