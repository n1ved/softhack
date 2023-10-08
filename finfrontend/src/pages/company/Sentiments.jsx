import React from "react";
export default function Sentiments({ score, loading }) {
  return (
    <div className="stats bg-primary text-primary-content w-max overflow-hidden h-[300px] mt-6">
      <div className="m-10">
        <h1 className=" text-black text-[22px] mt-5 w-max font-semibold">
          Recent Sentiments
        </h1>
        <h1 className="font-semibold text-[80px]  mt-5">
          {loading  ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            `${score}%`
          )}
        </h1>
      </div>
    </div>
  );
}
