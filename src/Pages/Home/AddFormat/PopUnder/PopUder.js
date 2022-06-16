import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import popUnderImg from "../../../../img/popunder.jpg";
const PopUder = () => {
  return (
    <div>
      <div class=" mb-16 bg-gray-100">
        <div class=" md:flex  md:pl-7">
          <img
            src={popUnderImg}
            class="md:max-w-2xl w-96 rounded-md shadow-2xl object-fill"
          />
          <div className="md:px-16">
            <h4 className="text-primary text-2xl mt-7 md:mt-2">POP-UNDER</h4>
            <p className="my-5 text-xl">
              This is one of the most popular ads. After user’s click, this ad
              opens landing page in behind. So, the user experience is not
              hampered much.
            </p>
            <p className="mt-10 md:mt-16 text-secondary">
              <a href="masterkey.digital/bn/format/ppur">Learn more</a>
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

export default PopUder;
