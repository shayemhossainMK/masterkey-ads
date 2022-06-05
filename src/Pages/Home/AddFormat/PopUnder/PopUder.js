import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import popUnderImg from "../../../../img/popunder.jpg";
const PopUder = () => {
  return (
    <div>
      <div class=" min-h-screen bg-gray-100">
        <div class=" flex">
          <img src={popUnderImg} class="max-w-lg rounded-md shadow-2xl" />
          <div className="md:px-16">
            <h4 className="text-primary text-xl mt-2">POP-UNDER</h4>
            <p className="my-5">
              This is one of the most popular ads. After user’s click, this ad
              opens landing page in behind. So, the user experience is not
              hampered much.
            </p>
            <p className="mt-32 text-secondary">
              Learn more <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUder;
