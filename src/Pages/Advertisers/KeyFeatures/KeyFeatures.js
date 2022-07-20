import {
  faBriefcase,
  faBullseye,
  faChartLine,
  faHeadset,
  faMasksTheater,
  faRectangleAd,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const KeyFeatures = () => {
  return (
    <div className="md:px-20 px-5 py-10">
      <div>
        <h1 className="text-secondary text-2xl mb-14 text-center font-bold">
          KEY FEATURES
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-20">
        <div className="text-center shadow-xl rounded-xl p-5 hover:shadow-2xl hover:scale-105 duration-500">
          <FontAwesomeIcon
            className="text-6xl mx-auto w-full text-secondary"
            icon={faChartLine}
          ></FontAwesomeIcon>
          <h1 className="text-primary text-xl mb-3 font-semibold text-center mt-5">
            ANALYTICS
          </h1>
          <p className="text-center">
            Super user friendly dashboard that provide all of the insights you
            needs as an advertiser.
          </p>
        </div>
        <div className="text-center shadow-xl rounded-xl p-5 hover:shadow-2xl hover:scale-105 duration-500">
          <FontAwesomeIcon
            className="text-6xl mx-auto w-full text-secondary"
            icon={faBriefcase}
          ></FontAwesomeIcon>
          <h1 className="text-primary text-xl mb-3 font-semibold mt-5">
            SELF-SERVE PLATFORM
          </h1>
          <p>
            We have our own anti-fraud platform that performs full traffic
            analysis in the shortest time possible
          </p>
        </div>
        <div className="text-center shadow-xl rounded-xl p-5 hover:shadow-2xl hover:scale-105 duration-500">
          <FontAwesomeIcon
            className="text-6xl mx-auto w-full text-secondary"
            icon={faShieldHalved}
          ></FontAwesomeIcon>
          <h1 className="text-primary text-xl mb-3 font-semibold mt-5 ">
            Fraud Detection
          </h1>
          <p>
            We have our own anti-fraud platform that performs full traffic
            analysis in the shortest time possible
          </p>
        </div>
        <div className="text-center shadow-xl rounded-xl p-5 hover:shadow-2xl hover:scale-105 duration-500">
          <FontAwesomeIcon
            className="text-6xl mx-auto w-full text-secondary"
            icon={faHeadset}
          ></FontAwesomeIcon>
          <h1 className="text-primary text-xl mb-3 font-semibold mt-5">
            CUSTOMER SUPPORT
          </h1>
          <p>
            We have our own anti-fraud platform that performs full traffic
            analysis in the shortest time possible
          </p>
        </div>
        <div className="text-center shadow-xl rounded-xl p-5 hover:shadow-2xl hover:scale-105 duration-500">
          <FontAwesomeIcon
            className="text-6xl mx-auto w-full text-secondary"
            icon={faRectangleAd}
          ></FontAwesomeIcon>
          <h1 className="text-primary text-xl mb-3 font-semibold mt-5">
            VARIOUS AD FORMATS
          </h1>
          <p>
            Numerous ad formats to choose from.
            <span className="mt-2 text-blue-900">
              <Link to="/">Learn more</Link>
            </span>
          </p>
        </div>
        <div className="text-center shadow-xl rounded-xl p-5 hover:shadow-2xl hover:scale-105 duration-500">
          <FontAwesomeIcon
            className="text-6xl mx-auto w-full text-secondary"
            icon={faBullseye}
          ></FontAwesomeIcon>
          <h1 className="text-primary text-xl mb-3 font-semibold mt-5">
            AD-TARGETING
          </h1>
          <p>
            Target users by location, device, OS, carriers, and other
            advertising verticals with the options for white- and black-lists
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
