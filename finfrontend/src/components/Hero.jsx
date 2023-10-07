import React from "react";
import "../pages/home/home.css";
function Hero() {
  return (
    <div className="h-[600px] flex justify-center items-center main home-container">
      <h1 className="text-[110px] m-10 font-extrabold text-left hero-text">
        TRADE THE <br />
        <span className="text-yellow-500">RIGHT</span> WAY
      </h1>
    </div>
  );
}

export default Hero;
