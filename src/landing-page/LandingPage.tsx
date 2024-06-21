import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./landingpage.css";
import MiddlePart from "./middle/MiddlePart";
import Footer from "@/components/footer/Footer";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="landingPageDiv">
        <MiddlePart />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
