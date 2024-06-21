import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./getevidencepage.css";
import "../../app/globals.css";

type Props = {};

const GetEvidencePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="getEvidencePageDiv ">
        <div className="flex flex-row items-center justify-start"></div>
        <div className="flex flex-col justify-start items-start">
          <h3
            className="text-3xl ml-4 mt-8 font-bold"
            style={{ fontFamily: "Playwrite NZ, cursive" }}
          >
            The Conspiracy theories are true 🤓
          </h3>
          <h4
            className="text-xl ml-5 mt-2 font-semibold"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Want Evidence? 🕵️
          </h4>
          <textarea
            placeholder="Write anything you think that is true."
            className="ml-5 h-72 w-96 rounded-sm outline-none border-2 border-gray-700 mt-4 p-4  rounded-br-3xl"
          />
          <div className="w-full items-center justify-center">
            <h4>Or</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </>
  );
};

export default GetEvidencePage;
