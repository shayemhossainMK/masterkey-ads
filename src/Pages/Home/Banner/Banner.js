import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerImg from "../../../img/2.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-gray-100 md:mt-[-5rem]">
      <div className="md:px-20 px-5">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img className="w-96 order-2 md:order-1" src={bannerImg} />
            <div className="order-1 md:order-2">
              <h1 className="text-3xl font-bold banner">
                AN AD NETWORK <br /> THAT YOU WANT
              </h1>

              <p className="py-6 md:pr-28">
                Masterkey Digital is a global ad network that offers mutually
                beneficial cooperation for everyone - webmasters, advertisers,
                media buyers, and ad networks. Today we work globally with more
                than 100 GEOs and can offer different ad formats.
              </p>

              <button className="btn btn-primary btn-sm  rounded-full text-white mb-10 hover:bg-transparent hover:text-secondary duration-300">
                Explore More
                <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
