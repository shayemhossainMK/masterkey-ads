import React from "react";

const BannerAd = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">BANNER AD</h1>
            <p class="py-6">
              This is one of the most popular ads. After user’s click, this ad
              opens landing page in behind. So, the user experience is not
              hampered much.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
