import React, { useEffect, useState } from "react";

const AdvertisersSummaryContainer = ({ summary }) => {
  const [count, setCount] = useState("0");
  const { number, duration, text } = summary;

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);
  return (
    <div>
      <div className="text-center bg-base-100 w-60 mx-auto mt-14 py-10 shadow-xl rounded-xl">
        <p className="font-bold mt-1 text-primary text-2xl">{count}+</p>
        <p className=" mt-3" style={{ fontFamily: "Macondo" }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default AdvertisersSummaryContainer;
