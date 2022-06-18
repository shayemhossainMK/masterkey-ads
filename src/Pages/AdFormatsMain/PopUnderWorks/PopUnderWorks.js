import React from "react";

const PopUnderWorks = () => {
  return (
    <div className="px-2 md:px-20">
      <div>
        <h1 className="text-primary text-2xl font-bold text-center">
          HOW POP-UNDER WORKS?
        </h1>
      </div>
      <p className="text-center px-1 pb-5 md:px-5 mt-5">
        Pops are the new browser windows or tabs that appear over a currently
        viewed <br /> page (popups) or under it (popunders)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-10">
        <div className="">
          <img
            src="https://api.lorem.space/image/movie?w=291&h=200"
            className="max-w-sm rounded-lg mx-auto shadow-2xl"
          />
          <p className="mt-7 text-center">Step 1</p>
        </div>
        <div>
          <img
            src="https://api.lorem.space/image/movie?w=290&h=200"
            className="max-w-sm rounded-lg mx-auto shadow-2xl"
          />
          <p className="mt-7 text-center">Step 2</p>
        </div>
        <div>
          <img
            src="https://api.lorem.space/image/movie?w=289&h=200"
            className="max-w-sm rounded-lg mx-auto shadow-2xl"
          />
          <p className="mt-7 text-center">Step 3</p>
        </div>
      </div>
    </div>
  );
};

export default PopUnderWorks;
