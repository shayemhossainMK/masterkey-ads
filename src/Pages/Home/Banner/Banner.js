import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerImg from "../../../img/banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="md:px-20 px-5">
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img className="order-2 md:order-1" src={bannerImg} />
            <div className="order-1 md:order-2">
              <h1 class="text-3xl font-bold">
                IT Management Service & <br /> Support for Your Business.
              </h1>

              <p class="py-6 md:pr-28">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <button class="btn btn-primary  rounded-full text-white mb-10 hover:bg-transparent hover:text-secondary duration-300">
                Explore More{" "}
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
