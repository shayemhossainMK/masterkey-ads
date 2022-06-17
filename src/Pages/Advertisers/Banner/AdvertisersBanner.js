import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerImg from "../../../img/banner.png";

const AdvertisersBanner = () => {
  return (
    <div className="bg-gray-100 md:mt-[-5rem]">
      <div className="md:px-20 px-5">
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img className="w-72 order-2 md:order-1" src={bannerImg} />
            <div className="order-1 md:order-2">
              <h1 class="text-3xl text-primary font-bold banner">
                REACH, ATTRACT <br /> AND CONVERT
              </h1>
              <p className="mt-10 md:pr-28">
                Want to run the best possible ad campaign through our traffic
                network? Join us as advertiser. By using our self-service system
                you can run highly effective campaigns.
              </p>
              <p class="py-6 md:pr-28">
                Reach your marketing goals easily and efficiently with the help
                of various advertising formats! We have all you need to achieve
                a success and we’re eager to help you in it.
              </p>

              <button class="btn btn-primary btn-sm  rounded-full text-white mb-10 hover:bg-transparent hover:text-secondary duration-300">
                Advertise Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisersBanner;
