// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" px-4 py-2 flex items-center justify-between">
      <div className="text-xl font-bold">
        <img
          src="https://media.discordapp.net/attachments/1252560950897283162/1253626567687671869/image.png?ex=66768a38&is=667538b8&hm=3f983d9d5914d4c7dc395ffa1955234e69e2954e80066ae7db1bb2098c0dbe45&=&format=webp&quality=lossless&width=718&height=303"
          style={{ width: "120px" }}
          className="mix-blend-multiply"
        />
      </div>

      <div className="hidden md:flex space-x-4">
        <ul className="flex flex-row px-2">
          <li className="mr-4">
            <a
              className="hover:text-gray-800 hover:font-semibold cursor-pointer transition-all text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-800 hover:font-semibold cursor-pointer transition-all text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              About
            </a>
          </li>
        </ul>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
