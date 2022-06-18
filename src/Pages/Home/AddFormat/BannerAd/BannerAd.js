import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerAdd from "../../../../img/bannerAdd.webp";

const BannerAd = () => {
  return (
    <div>
      <div className=" mb-16 bg-gray-100">
        <div className=" md:flex md:pl-10">
          <img
            src={bannerAdd}
            className="md:max-w-2xl w-96 rounded-md shadow-2xl object-fill "
          />
          <div className="md:px-16">
            <h4 className="text-primary text-2xl mt-7 mb-2 md:mt-2">
              BANNER AD
            </h4>
            <p>One of the most effective ways to run campaigns.</p>
            <p className="my-5 text-xl">
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

export default BannerAd;
