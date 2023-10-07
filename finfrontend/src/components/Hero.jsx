import React from "react";
import "../pages/home/home.css";
import holder from "../assets/holder.png";
function Hero() {
  return (
    <div className="h-max flex justify-between main home-container">
      <h1 className="text-[110px] m-10 font-extrabold text-left hero-text">
        TRADE THE <br />
        <span className="text-yellow-500">RIGHT</span> WAY
      </h1>
      <img src={holder} alt="holder" className="holder-img m-20" />
    </div>
  );
}

export default Hero;
