import React from "react";
import Sentiments from "./Sentiments";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Stocks from "./Stocks";
import News from "./news.jsx";
export default function Company() {
  const [score, setScore] = useState("");
  const { companyName } = useParams();
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://3.27.250.15:8000/fintech/score/${companyName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const adjustedScore = Math.round(data.score.toFixed(2) * 100);
          setScore(adjustedScore); // Set the adjusted score
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companyName]);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/logo?name=${companyName}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "4pCVhSzR5/x9pFCOHeLc1g==J6UgRndAESxjqNpM",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setLogo(data[0].image);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchLogo();
  }, [logo]);

  return (
    <div className="mockup-window border bg-base-300 m-6">
      <div className="flex  px-4 py-4 bg-base-200">
        <div className="card w-[300px] h-[300px]  bg-slate-200 shadow-xl m-6">
          <div className="card-body flex items-center">
            <h2 className="card-title text-black text-[30px]">
              {companyName.toUpperCase()}
            </h2>
          </div>
          <figure className="rounded-lg">
            <img
              src={logo}
              alt="company"
              className="w-full h-full mb-10 pt-5"
            />
          </figure>
        </div>
        <Sentiments score={score} loading={loading} />
        <Stocks />
      </div>
      <News companyName={companyName}/>
    </div>
  );
}
