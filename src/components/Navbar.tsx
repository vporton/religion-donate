import { Web3Button } from "@web3modal/react";
import React from "react";

interface Props {
  amount: number;
  handleModal: any;
  onChange: any;
}

const Navbar: React.FC<Props> = ({ amount, handleModal, onChange }) => {
  return (
    <div className=" flex flex-col md:flex-row lg:flex-row items-center justify-between md:justify-between lg:justify-between h-24 md:h-20 lg:h-20 w-full shadow-lg bg-white px-4 md:px-10 lg:px-52">
      <div>
        <a
          className="text-black text-sm md:text-2xl font-black"
          href="https://science-dao.org"
        >
          The Great Priest
        </a>
        <a href="#!">
          {/* <img src={Logo} alt="logo" className=" w-32 md:w-40 lg:w-40 " /> */}
        </a>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <div className="bg-white flex justify-between items-center px-8 py- rounded-lg shadow-lg border md:mt-0">
          <input
            name="amount"
            value={amount}
            className="bg-transparent w-[95%] outline-none py-4"
            type="number"
            placeholder="Enter your amount..."
            onChange={onChange}
          />
          <div className="bg-transparent border w-max rounded-lg p-2">$$</div>
        </div>

        <button
          onClick={handleModal}
          className="flex items-center justify-center h-10 px-2 md:w-40 bg-red-700 text-sm rounded text-white lg:inline-flex "
        >
          <p>Donate Now</p>
          <div className=" flex items-center justify-center h-7 w-7 rounded-full bg-transparent border border-white ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
