import React from "react";
import influencer from "../../../img/services/influencer.png";
import advertiser from "../../../img/services/advertiser.png";
import publisher from "../../../img/services/publisher.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-5 md:px-20 pb-10">
        <div className="text-center">
          <p className="font-bold text-secondary text-3xl">
            AVAILABLE FOR EVERYONE
          </p>
          <p className="mt-2">
            Monetize your online presence and earn more. <br />
            <span>Join us now</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-5 py-10">
          <div className="service-card shadow-md hover:bg-secondary hover:text-white duration-500 rounded-lg py-5 px-2">
            <div className="w-32 mx-auto p-4 bg-base-100 rounded-full">
              <img className="w-32 mx-auto p-5 " src={advertiser} alt="" />
            </div>
            <p className="py-3 mb-3">Advertiser</p>
            <a href="advertiser.masterkey.digital/bn/access">
              <button className="btn btn-sm service-btn">
                Get the best ROI
              </button>
            </a>
          </div>
          <div className="service-card shadow-md hover:bg-secondary hover:text-white duration-500 rounded-lg py-5 px-2">
            <div className="w-32 mx-auto p-4 bg-base-100 rounded-full">
              <img className="w-32 mx-auto p-5 " src={publisher} alt="" />
            </div>
            <p className="py-3 mb-3">Publisher</p>
            <a href="publisher.masterkey.digital/bn/access">
              <button className="btn btn-sm service-btn">
                Monetize Traffic
              </button>
            </a>
          </div>
          <div className="service-card shadow-md hover:bg-secondary hover:text-white duration-500 rounded-lg py-5 px-2">
            <div className="w-32 mx-auto p-4 bg-base-100 rounded-full">
              <img className="w-32 mx-auto p-5 " src={influencer} alt="" />
            </div>
            <p className="py-3 mb-3">Influencer</p>
            <a href="Influencer.masterkey.digital/bn/access">
              <button className="btn btn-sm service-btn ">Start Earning</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
