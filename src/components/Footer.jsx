import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LogoRespo from "../assets/logo-respo.png";

const Footer = () => {
  return (
    <div className="w-full h-[80px] bg-[#040c16]  flex justify-between items-center">
      <div className="text-gray-300 px-4  flex items-end">
        <img className="w-[50px]" src={LogoRespo} alt="logo_responsive" />
        &nbsp;&nbsp;
        <p className="hidden md:block text-xs "> © 2023 Ashutosh Ghosh </p>
      </div>
      <div className="w-[100px]">
        <ul className="flex justify-around items-center">
          <li className=" p-2 cursor-pointer">
            <FaLinkedin size={20} color="#0a66c2" />
          </li>
          <li className=" p-2 cursor-pointer">
            <FaGithub size={20} color="#fff" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
