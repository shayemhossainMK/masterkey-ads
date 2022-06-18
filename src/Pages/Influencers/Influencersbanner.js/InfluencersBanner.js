import React from "react";
import bannerImg from "../../../img/influencer.jpg";

const InfluencersBanner = () => {
  return (
    <div>
      <div className="bg-gray-100 mt-[-5rem]">
        <div className="md:px-20 px-5">
          <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img
                className="w-96 rounded-xl shadow-md order-2 md:order-1"
                src={bannerImg}
              />
              <div className="order-1 md:order-2">
                <h1 class="text-3xl font-bold banner text-secondary">
                  MONETIZE YOUR <br /> ONLINE PRESENCE
                </h1>

                <p class="py-6 md:pr-28">
                  Monetize your online presence with Masterkey Digital. Get
                  unlimited earning opportunity with proven result. Thousands of
                  social influencers have been earning millions each month. Join
                  the best network platform and earn by utilizing your favorite
                  social platforms.
                </p>

                <button class="btn btn-secondary btn-sm  rounded-full text-white mb-10 hover:bg-transparent hover:text-secondary duration-300">
                  Start Earning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencersBanner;
