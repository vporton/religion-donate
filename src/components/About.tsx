import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full bg-gray-100 py-16 md:py-16 lg:py-20  px-5 md:px-10 lg:px-64">
        <div className="flex flex-col items-start justify-center h-full w-full md:w-[50%] mb-8 md:mb-8 lg:mb-8 md:mr-20 lg:ml-20">
          <h1 className="text-[#111111] text-sm font-semibold pb-8 ">
            ABOUT US
          </h1>
          <p className="font-opensans font-bold text-[#111111] text-3xl md:text-4xl lg:text-4xl leading-relaxed mb-10 md:mb-4 lg:mb-4">
            Donate to the great priest's nonprofit.
          </p>
          <a
            href="#top"
            className=" flex items-center justify-center h-11 w-44 bg-red-700 transition ease-out duration-700 rounded text-white font-montserrat text-sm transform scale-100 hover:scale-110  "
          >
            {" "}
            Donate Now
          </a>
        </div>

        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="mb-16">
            <p className="font-montserrat text-[#111111]">
              The Great Priest, Victor Porton, is going to use your money for good purposes.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-top justify-between">
            <div className="flex flex-col items-start">
            </div>
            <div className="flex flex-col items-start">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
