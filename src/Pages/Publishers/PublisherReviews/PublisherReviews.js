import React from "react";

const PublisherReviews = () => {
  return (
    <div className="px-3 md:px-16">
      <div className="pt-20">
        <h1 className="text-secondary text-2xl mb-14 text-center font-bold">
          TOP PUBLISHERS’ REVIEWS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
        <div className="w-80 py-10 bg-base-100 rounded-3xl shadow-xl mx-auto">
          <p className="px-5 mb-5">
            Daily improvisation and creative ads are the plus points. Live
            Customer Support is the main what attracts publishers to be part of
            Masterkey.
          </p>
          <div className="flex px-5 items-center">
            <div class="avatar">
              <div class="w-14 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
            <p className="ml-5">Randall Fleming</p>
          </div>
        </div>
        <div className="w-80 py-10 bg-base-100 rounded-3xl shadow-xl mx-auto">
          <p className="px-5 mb-5">
            Daily improvisation and creative ads are the plus points. Live
            Customer Support is the main what attracts publishers to be part of
            Masterkey.
          </p>
          <div className="flex px-5 items-center">
            <div class="avatar">
              <div class="w-14 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
            <p className="ml-5">Drogo Holland</p>
          </div>
        </div>
        <div className="w-80 py-10 bg-base-100 rounded-3xl shadow-xl mx-auto">
          <p className="px-5 mb-5">
            Daily improvisation and creative ads are the plus points. Live
            Customer Support is the main what attracts publishers to be part of
            Masterkey.
          </p>
          <div className="flex px-5 items-center">
            <div class="avatar">
              <div class="w-14 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
            <p className="ml-5">Clifford Wilcher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherReviews;
