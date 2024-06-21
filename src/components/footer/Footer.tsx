// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#d4d4d1] py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">
              <img
                src="https://media.discordapp.net/attachments/1252560950897283162/1253626567687671869/image.png?ex=66768a38&is=667538b8&hm=3f983d9d5914d4c7dc395ffa1955234e69e2954e80066ae7db1bb2098c0dbe45&=&format=webp&quality=lossless&width=718&height=303"
                style={{ width: "140px" }}
                className="mix-blend-multiply"
              />
            </h1>
          </div>

          <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <a className="hover:text-gray-600 hover:cursor-pointer">Home</a>
              </li>
              <li>
                <a className="hover:text-gray-600 hover:cursor-pointer">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 flex justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 hover:cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351c0 .728.597 1.324 1.325 1.324h11.494v-9.294H9.925v-3.622h2.894v-2.672c0-2.87 1.744-4.434 4.297-4.434 1.222 0 2.273.091 2.579.132v2.993h-1.769c-1.389 0-1.656.66-1.656 1.625v2.357h3.313l-.432 3.622h-2.881v9.294h5.654c.728 0 1.324-.596 1.324-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 hover:cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.9 9.9 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.973-3.127 1.194a4.92 4.92 0 00-8.384 4.482c-4.092-.205-7.719-2.166-10.148-5.145a4.822 4.822 0 00-.665 2.475c0 1.708.869 3.216 2.19 4.099a4.904 4.904 0 01-2.23-.616c-.054 1.951 1.362 3.785 3.355 4.194a4.937 4.937 0 01-2.224.085 4.924 4.924 0 004.604 3.417A9.867 9.867 0 010 21.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 hover:cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3C3.7 3 2.66 4.02 2.66 5.3S3.7 7.6 4.98 7.6s2.32-1.02 2.32-2.3S6.26 3 4.98 3zm.02 4.9h-4.3v14.1h4.3v-14.1zm7.86 0h-4.3v14.1h4.3v-7.8c0-1.9.54-3.3 2.6-3.3s3 1.4 3 3.3v7.8h4.3v-8.4c0-4.8-2.5-7-5.8-7-2.7 0-3.9 1.3-4.5 2.2h-.1v-1.9z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500">
            © 2024 ThePlotPPT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
