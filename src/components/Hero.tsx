import React from "react";
import hero from "../assets/hero.png";
import address from "../assets/address.svg";
import MetamaskLogo from "./MetamaskLogo";
import { Web3Button } from "@web3modal/react";
import { Link } from "react-router-dom";

const Hero = ({ handleModal }: any) => {
  const redirectToUrl = () => {
    window.location.href =
      "https://after-gospel.vporton.name/donate-to-victor-portons-foundation/";
  };
  return (
    <div
      className="relative flex items-center justify-center lg:py-40 w-full bg-cover bg-center bg-no-repeat  md:bg-fixed lg:bg-fixed "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className=" z-0 absolute h-full w-full top-0 bg-black opacity-75 "></div>
      <div className="z-10 relative flex flex-col md:flex-col lg:flex-row items-center justify-center md:justify-center lg:justify-between w-full px-5 md:px-10 lg:px-52">
        <div className="flex flex-col items-center md:items-center lg:items-start justify-center mt-14 md:mt-16 lg:mt-0">
          <p
            style={{ letterSpacing: "8px" }}
            className="text-white text-center text-xs font-semibold tracking-widest font-roboto pb-8"
          >
            WE CAN CHANGE THE WORLD TOGETHER
          </p>
          <div className=" flex flex-col items-start text-white text-4xl md:text-5xl lg:text-5xl font-bold text-center font-opensans mb-20">
            <p className="pb-6">Donate for Faith</p>
            <p>And Change World</p>
          </div>
        
          <div className="flex flex-col md:flex-col lg:flex-row items-center mb-10  ">
          
            {/* <button
              onClick={redirectToUrl}
              className="h-11 w-40 bg-[#27a6ff]  text-white  font-montserrat font-medium  rounded transform scale-100 hover:scale-110 transition ease-out duration-700  lg:mr-6 mb-4 md:mb-6 lg:mb-0 "
              style={{ width: "200px" }}
            >
              Donate by Credit Card
            </button> */}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center h-max w-full md:w-80 lg:w-80 bg-white lg:mr-12 mb-10 rounded pt-8">
          <p className="text-black font-black">SCAN TO DONATE</p>
          <p className="text-black font-black text-xl md:text-2xl">
            Donate crypto
          </p>
          <img src={address} alt="qrcode" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
