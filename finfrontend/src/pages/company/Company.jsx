import React from "react";
import Sentiments from "./Sentiments";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Stocks from "./Stocks";
export default function Company() {
  const [score, setScore] = useState("");
  const { companyName } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/fintech/score/${companyName}`,
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
      }finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [companyName]);
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
              src="https://picsum.photos/200/300"
              alt="company"
              className="w-2/3 h-56"
            />
          </figure>
        </div>
        <Sentiments score={score} loading={loading}/>
        <Stocks />
      </div>
      
    </div>
  );
}
