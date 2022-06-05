import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import skim from "../../../../img/skim.jpg";

const Skim = () => {
  return (
    <div>
      <div class=" min-h-screen bg-gray-100">
        <div class=" flex">
          <img src={skim} class="max-w-lg max-h-sm rounded-md shadow-2xl" />
          <div className="md:px-16">
            <h4 className="text-primary text-xl mt-2">SKIM</h4>
            <p className="my-5">
              SKIM" is a link that a publisher inserts on a specific site
              element, and after clicking on it, an advertisement appears to the
              user. SKIM gives 100% control of your sold traffic amount, higher
              CR to advertisers and CPM rates to publishers.
            </p>
            <p className="mt-20 text-secondary">
              Learn more <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skim;
