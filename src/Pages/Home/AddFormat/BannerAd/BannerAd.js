import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannerAdd from "../../../../img/bannerAdd.webp";

const BannerAd = () => {
  return (
    <div>
      <div class=" mb-16 bg-gray-100">
        <div class=" md:flex md:pl-10">
          <img
            src={bannerAdd}
            class="md:max-w-2xl w-96 rounded-md shadow-2xl object-fill "
          />
          <div className="md:px-16">
            <h4 className="text-primary text-2xl mt-7 md:mt-2">BANNER AD</h4>
            <p className="my-5 text-xl">
              Choose between the available banner formats. Highly effective ad
              for visibility.
            </p>
            <p className="mt-10 md:mt-20 text-secondary">
              <a href="masterkey.digital/bn/format/banner">Learn more</a>
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowUpRightFromSquare}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
