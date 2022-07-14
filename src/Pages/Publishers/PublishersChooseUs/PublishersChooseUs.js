import React from "react";

const PublishersChooseUs = () => {
  return (
    <div className="pt-16">
      <div className="md:px-20 px-5 py-10 ">
        <div>
          <h1 className="text-secondary text-2xl mb-14 text-center font-bold">
            WHY PUBLISHERS CHOOSE US?
          </h1>
        </div>
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-x-8 md:gap-x-32 gap-y-10 md:gap-y-20">
          <div className="">
            <h1 className="text-secondary text-xl mb-3 font-semibold">
              DIRECT ADVERTISERS
            </h1>
            <p>Lots of advertisers and brands to choose from</p>
          </div>
          <div className="">
            <h1 className="text-secondary text-xl mb-3 font-semibold">
              WORLDWIDE GEO COVERAGE
            </h1>
            <p>Coverage up to 10 countries</p>
          </div>
          <div className="">
            <h1 className="text-secondary text-xl mb-3 font-semibold">
              USEFUL TOOLS
            </h1>
            <p>Real time analytics and easy to process data system.</p>
          </div>
          <div className="">
            <h1 className="text-secondary text-xl mb-3 font-semibold">
              CUSTOMER SUPPORT
            </h1>
            <p>
              Our support team is always there to help and guide you through the
              solutions.
            </p>
          </div>
          <div className="">
            <h1 className="text-secondary text-xl mb-3 font-semibold">
              TAILORED PAYMENT OPTIONS
            </h1>
            <p>
              Become our partner without hassle! We integrated onboarding
              materials into your account to familiarize yourself quicker. And
              our lightning-fast moderation will allow you to get started in no
              time.
            </p>
          </div>
          <div className="">
            <h1 className="text-secondary text-xl mb-3 font-semibold">
              FASTEST APPROVAL
            </h1>
            <p>
              Target users by location, device, OS, carriers, and other
              advertising verticals with the options for white- and black-lists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishersChooseUs;
