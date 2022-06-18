import React from "react";
import bannerImg from "../../../img/banner.png";

const PublishersBanner = () => {
  return (
    <div>
      <div className="bg-gray-100 md:mt-[-5rem]">
        <div className="md:px-20 px-5">
          <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img className="w-72 order-2 md:order-1" src={bannerImg} />
              <div className="order-1 md:order-2">
                <h1 class="text-3xl font-bold banner text-secondary">
                  MONETIZE YOUR <br /> TRAFFIC
                </h1>

                <p class="py-6 md:pr-28">
                  Masterkey Digital is a global ad network that offers mutually
                  beneficial cooperation for everyone - webmasters, advertisers,
                  media buyers, and ad networks. Today we work globally with
                  more than 100 GEOs and can offer different ad formats.
                </p>

                <button class="btn btn-secondary btn-sm  rounded-full text-white mb-10 hover:bg-transparent hover:text-secondary duration-300">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishersBanner;
