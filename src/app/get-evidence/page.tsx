"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import "./getevidencepage.css";
import "../../app/globals.css";

type Props = {};

const GetEvidencePage = (props: Props) => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleGetEvidenceClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://5000-0armaan025-conspiracypp-sbtocym0qar.ws-us114.gitpod.io/generate_ppt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ theory: inputText }),
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "generated_presentation.pptx";
        a.click();
      } else {
        console.error("Failed to generate PPT");
      }
    } catch (error) {
      console.error("Error generating PPT:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomTheoryClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://5000-0armaan025-conspiracypp-sbtocym0qar.ws-us114.gitpod.io/generate_ppt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "generated_presentation.pptx";
        a.click();
      } else {
        console.error("Failed to generate PPT");
      }
    } catch (error) {
      console.error("Error generating PPT:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="getEvidencePageDiv ">
        <div className="flex flex-row items-center justify-center ml-8">
          <div className="flex flex-col justify-center items-cennter">
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
              value={inputText}
              onChange={handleInputChange}
              className="ml-5 h-72 w-full rounded-sm outline-none border-2 border-gray-700 mt-4 p-4 rounded-br-3xl"
            />
            <input
              type="button"
              value={loading ? "Generating..." : "Get some evidence!"}
              disabled={loading}
              onClick={handleGetEvidenceClick}
              style={{ fontFamily: "Poppins" }}
              className="w-full ml-4 bg-[#242424] mt-2 py-4 px-2 rounded-md text-white text-lg transition-all cursor-pointer hover:bg-[#131313]"
            />
            <div className="w-full mt-4 ml-5 text-center items-center justify-center">
              <h4
                className="text-xl font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Or
              </h4>
              <input
                type="button"
                value={
                  loading
                    ? "Generating..."
                    : "Completely random theory evidence!"
                }
                disabled={loading}
                onClick={handleRandomTheoryClick}
                style={{ fontFamily: "Poppins" }}
                className="w-full bg-[#c4a454] mt-2 py-4 px-2 rounded-md text-black mb-4 text-lg transition-all cursor-pointer hover:bg-[#af903f]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetEvidencePage;
