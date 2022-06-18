import {
  faBullseye,
  faChartLine,
  faShuffle,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import photo1 from "../../../img/why-add/photo1.png";
import photo2 from "../../../img/why-add/photo2.png";
import photo3 from "../../../img/why-add/photo3.png";
import photo4 from "../../../img/why-add/photo4.png";

const WhyAds = () => {
  return (
    <div className="px-2 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        <div className="  md:border-r-2 md:border-gray-600 md:border-dashed">
          <div className="mx-auto px-5">
            <p className="px-10 py-1 text-center rounded-3xl shadow-xl bg-secondary text-white">
              Advantages
            </p>
          </div>
          <div className="flex items-center mt-10">
            <p>
              <FontAwesomeIcon
                className="mr-3 w-10 h-10"
                icon={faBullseye}
              ></FontAwesomeIcon>
            </p>
            <p>Advanced Targeting</p>
          </div>
          <div className="flex items-center mt-10">
            <p>
              <FontAwesomeIcon
                className="mr-3 w-10 h-10"
                icon={faChartLine}
              ></FontAwesomeIcon>
            </p>
            <p>Real-Time Statistics</p>
          </div>
          <div className="flex items-center mt-10">
            <p>
              <FontAwesomeIcon
                className="mr-3 w-10 h-10"
                icon={faShuffle}
              ></FontAwesomeIcon>
            </p>
            <p>
              Postback tracking with <br /> popular Track platforms
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="mx-auto">
            <p className="py-1 px-3 bg-primary text-white text-center rounded-3xl shadow-xl">
              Top performing verticals
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10 justify-center ">
            <div className="mx-auto">
              <img src={photo1} alt="" />
              <p>Dating</p>
            </div>
            <div className="mx-auto">
              <img src={photo2} alt="" />
              <p>Meds</p>
            </div>
            <div className="mx-auto">
              <img src={photo3} alt="" />
              <p>Webcam</p>
            </div>
            <div className="mx-auto">
              <img src={photo4} alt="" />
              <p>Forex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAds;
