import React from "react";

const Summary = () => {
  return (
    <div className="bg-secondary">
      <div className="text-center pt-7 text-base-100">
        <h2 className="text-2xl">MASTERKEY DIGITAL IN NUMBERS</h2>
      </div>
      <div className="px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="avatar mx-auto">
            <div className="w-44 p-9  rounded-full border-2 border-dashed border-white">
              <h3 className="text-white font-bold text-3xl mb-2">10 M+</h3>
              <p className="text-white">Daily Impressions</p>
            </div>
          </div>
          <div className="avatar mx-auto my-10 md:my-0">
            <div className="w-44 p-9  rounded-full bg-base-100">
              <h3 className="text-secondary font-bold text-3xl mb-2">1 BN+</h3>
              <p className="text-secondary">Monthly Impression</p>
            </div>
          </div>
          <div className="avatar mx-auto">
            <div className="w-44 p-9  rounded-full bg-primary">
              <h3 className="text-white font-bold text-3xl mb-2">5K+</h3>
              <p className="text-white">Global Publishers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
