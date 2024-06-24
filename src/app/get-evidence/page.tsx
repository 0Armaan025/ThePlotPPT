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
        <div className="flex flex-row items-center justify-start ml-8">
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
            <input
              type="button"
              value="Get some evidence!"
              style={{ fontFamily: "Poppins" }}
              className="w-96 ml-4 bg-[#242424] mt-2 py-4 px-2 rounded-md text-white text-lg transition-all cursor-pointer hover:bg-[#131313]"
            />
            <div className="w-96 mt-4 ml-5  text-center items-center justify-center">
              <h4
                className="text-xl font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Or
              </h4>
              <input
                type="button"
                value="Completely random theory evidence!"
                style={{ fontFamily: "Poppins" }}
                className="w-96  bg-[#c4a454] mt-2 py-4 px-2 rounded-md text-black mb-4 text-lg transition-all cursor-pointer hover:bg-[#af903f]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[100vh] border-[1.5px] border-black  border-dashed h-[55vh] bg-[#c7c7c7] rounded-md flex justify-center items-center">
              <h3 style={{ fontFamily: "Poppins" }} className="text-xl">
                &lt;Your ppt here&gt;
              </h3>
            </div>
            <input
              type="button"
              className="w-full bg-[#fbce5a] px-2 py-4 mt-4 rounded-lg text-xl cursor-pointer hover:bg-[#f9c43b] transition-all"
              style={{ fontFamily: "Poppins" }}
              value="Download now!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetEvidencePage;
