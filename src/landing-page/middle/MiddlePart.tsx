import React from "react";
import Link from "next/link";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 p-4">
          <h4
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Let&apos;s add some
          </h4>
          <h4
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            real evidence! 🤓
          </h4>
          <p className="mt-4 text-base lg:text-lg">
            Conspiracy theories are theories which many people believe are true,
            whereas others people no it&apos;s not true, you dumb person.
          </p>
          <br />
          <Link href="/get-evidence">
            <button className="bg-[#242424] text-white px-4 py-2 mt-4 rounded-md transition-all hover:bg-[#131313]">
              Get some evidence!
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <img
            src="https://media.discordapp.net/attachments/1252560950897283162/1255103162478493718/image.png?ex=667be968&is=667a97e8&hm=4f1d83766c7445d82b0116d987ef409437969e5324ba64e3b13148f83f300385&=&format=webp&quality=lossless&width=825&height=354"
            alt="Evidence Image"
            className="max-w-full h-auto border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;

// ANTHROPIC_API_KEY=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
// GEMINI_API_KEY=AIzaSyAbYtEwa3E0FEPpCGkYPTD7NdYwCrVASVY
// DEEPAI_API_KEY=4ddc1d8b-6136-4139-a6a8-77c91b28b19b
// REPLICATE_API_TOKEN=r8_3iIQiUed4x2f2Wn8auNfbGlVrCM66DW33OhYA
