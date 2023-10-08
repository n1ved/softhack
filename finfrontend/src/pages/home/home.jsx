import React from "react";
import logo from "../../assets/logo.png";
import Hero from "../../components/Hero";
import "./home.css";
import { Link } from "react-router-dom";
function home() {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-[#1E1E1E] sm:px-8 py-4 navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
          <h1 className="text-[28px] font-semibold">Tradio</h1>
        </Link>
        <Link to="/login">
          <div className="flex mx-5">
            <h2 className="">LOGIN</h2>
          </div>
        </Link>
      </header>
      <Hero />
      <div className="bg-[#1E1E1E] h-max radial-section">
        <p className="text-[50px] mx-10 py-20">
          designed to empower{" "}
          <span className="font-extrabold text-[#6e6eff]">INVESTORS</span> with
          the ability to make informed decisions on when to buy or sell stocks.
        </p>
      </div>
    </>
  );
}

export default home;
