import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import native from "../../../../img/native.webp";

const Native = () => {
  return (
    <div>
      <div class=" min-h-screen bg-gray-100">
        <div class=" flex">
          <img src={native} class="max-w-lg rounded-md shadow-2xl" />
          <div className="md:px-16">
            <h4 className="text-primary text-xl mt-2">NATIVE</h4>
            <p className="my-5">
              Ad format with the image and the title, that perfectly fits into
              the content of the site. Native ads are placed in the most visible
              areas of the page and, thus, this format shows good results and
              the level of interaction.
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

export default Native;
