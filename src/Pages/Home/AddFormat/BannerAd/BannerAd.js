import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerAdd from "../../../../img/bannerAdd.webp";

const BannerAd = () => {
  return (
    <div>
      <div class=" min-h-screen bg-gray-100">
        <div class=" flex">
          <img src={bannerAdd} class="max-w-lg rounded-md shadow-2xl" />
          <div className="md:px-16">
            <h4 className="text-primary text-xl mt-2">BANNER AD</h4>
            <p className="my-5">
              Choose between the available banner formats. Highly effective ad
              for visibility.
            </p>
            <p className="mt-24 text-secondary">
              <a href="">Learn more</a>{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
