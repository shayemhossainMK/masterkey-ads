import React from "react";
import { Link } from "react-router-dom";

const KeyFeatures = () => {
  return (
    <div className="md:px-20 px-5 py-10">
      <div>
        <h1 className="text-secondary text-2xl mb-14 text-center font-bold">
          KEY FEATURES
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-28 gap-y-10 md:gap-y-20">
        <div className="text-center md:text-left">
          <h1 className="text-primary text-xl mb-3 font-semibold">ANALYTICS</h1>
          <p>
            Super user friendly dashboard that provide all of the insights you
            needs as an advertiser.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-primary text-xl mb-3 font-semibold">
            SELF-SERVE PLATFORM
          </h1>
          <p>
            We have our own anti-fraud platform that performs full traffic
            analysis in the shortest time possible
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-primary text-xl mb-3 font-semibold">
            AD-TARGETING
          </h1>
          <p>
            We have our own anti-fraud platform that performs full traffic
            analysis in the shortest time possible
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-primary text-xl mb-3 font-semibold">
            CUSTOMER SUPPORT
          </h1>
          <p>
            We have our own anti-fraud platform that performs full traffic
            analysis in the shortest time possible
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-primary text-xl mb-3 font-semibold">
            VARIOUS AD FORMATS
          </h1>
          <p>
            Numerous ad formats to choose from.
            <p className="mt-2 text-blue-900">
              <Link to="/">Learn more</Link>
            </p>
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-primary text-xl mb-3 font-semibold">
            AD-TARGETING
          </h1>
          <p>
            Target users by location, device, OS, carriers, and other
            advertising verticals with the options for white- and black-lists
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
