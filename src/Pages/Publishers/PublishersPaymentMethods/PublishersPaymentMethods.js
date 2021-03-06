import React from "react";
import bkash from "../../../img/paymentMethods/bkash.png";
import nagad from "../../../img/paymentMethods/nagad.png";
import visa from "../../../img/paymentMethods/visa.png";

const PublishersPaymentMethods = () => {
  return (
    <div className="md:px-10">
      <div className="pt-10">
        <h1 className="text-secondary text-2xl mb-14 text-center font-bold px-5 md:px-0">
          PUBLISHER PAYMENT METHODS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
        <div className="w-52 mx-auto">
          <div className="py-4 shadow-xl rounded-md flex justify-center hover:bg-gray-300 duration-500">
            <img className="w-32" src={bkash} alt="" />
          </div>
          <p className="text-center mt-5">bKash</p>
        </div>
        <div className="w-52 mx-auto ">
          <div className=" shadow-xl rounded-md py-4 flex justify-center hover:bg-gray-300 duration-500">
            <img className="w-32" src={nagad} alt="" />
          </div>
          <p className="text-center mt-5">Nagad</p>
        </div>
        <div className="w-52 mx-auto">
          <div className=" py-11 shadow-xl rounded-md hover:bg-gray-300 duration-500">
            <h2 className="text-primary text-center font-bold text-xl">
              BANK TRANSFER
            </h2>
          </div>
          <p className="text-center mt-5">Bank Transfer</p>
        </div>
        <div className="w-52 mx-auto">
          <div className="py-9 flex justify-center shadow-xl rounded-md hover:bg-gray-300 duration-500">
            <img className="w-32" src={visa} alt="" />
          </div>
          <p className="text-center mt-5">Visa</p>
        </div>
      </div>
    </div>
  );
};

export default PublishersPaymentMethods;
