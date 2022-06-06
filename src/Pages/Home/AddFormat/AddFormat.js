import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar/Menubar";

const AddFormat = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-5 md:px-20 py-5">
        <div className="text-center">
          <p className="font-bold text-secondary text-2xl">
            VERSATILE AD FORMATS
          </p>
        </div>
        <div className="my-5">
          {/* this is manubar for multi router */}
          <Menubar></Menubar>
        </div>
      </div>
    </div>
  );
};

export default AddFormat;
