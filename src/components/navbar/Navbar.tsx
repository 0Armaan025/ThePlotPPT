// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" px-4 py-2 flex items-center justify-between">
      <div className="text-xl font-bold">
        <Link href="/">
          <img
            src="https://cdn.discordapp.com/attachments/1252560950897283162/1253626567687671869/image.png?ex=667bd038&is=667a7eb8&hm=2a9d3bb095f1ff2ff3bb21686aa2d251e02a46796480399d4c21fef8b5a7ffa2&"
            style={{ width: "120px" }}
            className="mix-blend-multiply"
          />
        </Link>
      </div>

      <div className="hidden md:flex space-x-4">
        <ul className="flex flex-row px-2 list-disc">
          <li className="mr-4">
            <Link
              href="/"
              className="hover:text-gray-500  cursor-pointer transition-all text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              Home
            </Link>
          </li>
          <li className="ml-4">
            <a
              className="hover:text-gray-500  cursor-pointer transition-all text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              About
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Link href="/get-evidence">
          <button className="bg-[#f8d683] hover:bg-[#c4a454] transition-all text-black font-semibold py-2 px-4 rounded">
            Get Evidence
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
