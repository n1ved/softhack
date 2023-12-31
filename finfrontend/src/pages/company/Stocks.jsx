import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stocks() {
  const [stockPrice, setStockPrice] = useState("");
  const { companyName } = useParams();
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    const fetchSymbol = async () => {
      try {
        const apiKey = "ckh8fp1r01qtga4ak1vgckh8fp1r01qtga4ak200";
        const response = await fetch(
          `https://finnhub.io/api/v1/search?q=${companyName}&token=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.result && data.result.length > 0) {
            setSymbol(data.result[0].symbol);
          } else {
            console.error("Symbol not found for the given company name");
          }
        } else {
          console.error(`Failed to fetch symbol. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("An error occurred while fetching symbol:", error);
      }
    };

    fetchSymbol();
  }, [companyName]);

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        if (!symbol) {
          setStockPrice("N/A");
          return;
        }

        const apiKey = "4Xegm6Lvjyfgp3bbOp1BYnuG4NKoaQel";
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setStockPrice(data[0].price);
          } else {
            setStockPrice("N/A");
          }
        } else {
          setStockPrice("N/A");
          console.error(
            `Failed to fetch stock price. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchStockPrice();
  }, [symbol]);

  return (
    <div className="stats bg-primary text-primary-content w-max overflow-hidden h-[300px] mt-6 ml-5">
      <div className="m-10 flex flex-col items-center">
        <h1 className="text-black text-[22px] mt-5 w-max font-semibold ">
          Stock Price
        </h1>
        <h1 className="font-semibold text-[80px]  mt-5">
          {stockPrice != "N/A" ? `${stockPrice} USD` : stockPrice}
        </h1>
        <div className="stat-actions"></div>
      </div>
    </div>
  );
}
