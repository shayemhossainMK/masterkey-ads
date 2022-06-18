import React from "react";

const AdPrice = () => {
  return (
    <div className="py-10 md:px-20">
      <div>
        <h1 className="text-center text-primary text-2xl uppercase font-bold">
          Prices
        </h1>
      </div>
      <p className="text-center font-semibold mt-4">
        Prices and CPM based on countries are here
      </p>
      <div className="grid grid-cols-2 md:w-[500px] w-80 h-56 md:h-[300px] mx-auto mt-10 p-3 bg-base-100 rounded-xl shadow-xl drop-shadow-xl">
        <div className="mx-auto">
          <h1 className="text-primary font-bold">Country</h1>
        </div>
        <div className="mx-auto">
          <h1 className="text-primary font-bold">CPM</h1>
        </div>
      </div>
    </div>
  );
};

export default AdPrice;
