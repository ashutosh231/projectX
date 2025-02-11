import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        {/* Copyright and Name */}
        <div className="flex flex-col gap-2">
          <span className="font-medium">
            Copyright &copy; 2024 ......... All rights reserved
          </span>
          <span className="font-medium">Aryan Singh</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 list-none">
          <li>
            <a
              href="#hero"
              className="transition duration-300 hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="transition duration-300 hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#recommend"
              className="transition duration-300 hover:text-blue-400"
            >
              Places
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="transition duration-300 hover:text-blue-400"
            >
              Testimonials
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="flex gap-6 list-none text-2xl">
          <li>
            <a
              href="#"
              className="transition duration-300 hover:text-blue-400"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300 hover:text-blue-400"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition duration-300 hover:text-blue-400"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
