import React from "react";
import native from "../../../../img/native.webp";

const Native = () => {
  return (
    <div>
      <div className="mb-16 bg-gray-100">
        <div className=" md:flex md:pl-5">
          <img
            src={native}
            className="md:max-w-2xl w-96 rounded-md shadow-2xl object-fill "
          />
          <div className="md:px-16">
            <h4 className="text-primary text-2xl mb-2 mt-7 md:mt-2">NATIVE</h4>
            <p>One of the most user friendly ads.</p>
            <p className="my-7 text-xl">
              The banner ads is also a classic ad format that includes a
              visually driven placeholders.
            </p>
            <p className="mt-10 text-secondary">
              <button className="btn btn-primary rounded-full text-white btn-sm px-5">
                Start Advertising
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Native;
