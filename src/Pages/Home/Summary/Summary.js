import React from "react";

const Summary = () => {
  return (
    <div className="bg-secondary">
      <div className="px-5 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div class="avatar">
            <div class="w-36 p-6  rounded-full border-2 border-dashed border-white">
              <h3 className="text-white font-bold">1 BN+</h3>
              <p>Daily Impressions</p>
            </div>
          </div>

          <div>
            <h3>$500K+</h3>
            <p>Paid</p>
          </div>
          <div>
            <h3>8K+</h3>
            <p>Global Publishers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
