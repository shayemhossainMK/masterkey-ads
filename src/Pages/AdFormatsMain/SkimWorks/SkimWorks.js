import React from "react";

const SkimWorks = () => {
  return (
    <div>
      <div className="px-2 md:px-20 py-5 md:pt-36 md:pb-20">
        <div>
          <h1 className="text-primary text-2xl font-bold text-center">
            HOW SKIM AD WORKS?
          </h1>
        </div>
        <p className="text-center px-1 pb-5 md:px-5 mt-3">
          Skim ad explanation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-10">
          <div className="">
            <img
              src="https://api.lorem.space/image/movie?w=291&h=200"
              class="max-w-sm rounded-lg mx-auto shadow-2xl"
            />
            <p className="mt-7 text-center">Step 1</p>
          </div>
          <div>
            <img
              src="https://api.lorem.space/image/movie?w=290&h=200"
              class="max-w-sm rounded-lg mx-auto shadow-2xl"
            />
            <p className="mt-7 text-center">Step 2</p>
          </div>
          <div>
            <img
              src="https://api.lorem.space/image/movie?w=289&h=200"
              class="max-w-sm rounded-lg mx-auto shadow-2xl"
            />
            <p className="mt-7 text-center">Step 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkimWorks;
