import React from "react";
import step1 from "../../../img/easyRegister/Picture1.png";
import arrow from "../../../img/easyRegister/arrow1.png";
import step2 from "../../../img/easyRegister/Picture2.png";
import step3 from "../../../img/easyRegister/Picture3.png";

const EasyRegister = () => {
  return (
    <div className="bg-gray-100">
      <div className="pb-10">
        <div>
          <h1 className="text-center text-secondary text-2xl font-bold">
            EASY TO REGISTER
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center mt-10 md:mt-14 w-screen md:px-20">
          <div className="mx-auto">
            <div>
              <img
                className="w-36 p-5 rounded-full  shadow-xl"
                src={step1}
                alt=""
              />
            </div>
            <p className="mt-6">Register account</p>
          </div>
          <div className="hidden md:block">
            <img className="w-64" src={arrow} alt="" />
          </div>
          <div className="mx-auto my-10 md:my-0">
            <div>
              <img
                className="p-7 w-36 rounded-full shadow-xl"
                src={step2}
                alt=""
              />
            </div>
            <p className="mt-6 text-center">Get verified</p>
          </div>
          <div className="hidden md:block">
            <img className="w-64" src={arrow} alt="" />
          </div>
          <div className="mx-auto">
            <div>
              <img
                className="p-7 w-36 rounded-full shadow-xl"
                src={step3}
                alt=""
              />
            </div>
            <p className="mt-6">Start monetizing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyRegister;
