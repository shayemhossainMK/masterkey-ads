import React, { useEffect, useState } from "react";
import AdvertisersSummaryContainer from "./AdvertisersSummaryContainer";

const AdvertisersSummary = () => {
  const [summarys, setSummarys] = useState([]);

  useEffect(() => {
    fetch("summaryData.json")
      .then((res) => res.json())
      .then((data) => setSummarys(data));
  }, []);
  return (
    <div className="bg-gray-100 pb-10 pt-5 md:pt-0">
      <div>
        <h1 className="text-secondary font-bold text-2xl text-center">
          WHY MASTERKEY DIGITAL?
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {summarys.map((summary) => (
            <AdvertisersSummaryContainer
              key={summary.id}
              summary={summary}
            ></AdvertisersSummaryContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisersSummary;
