import React from 'react'

export default function Stocks() {
  return (
    <div className="stats bg-primary text-primary-content w-max overflow-hidden h-[300px] mt-6 ml-5">
    <div className="m-10 flex flex-col items-center">
      <h1 className="text-black text-[22px] mt-5 w-max font-semibold ">
        Stock Price
      </h1>
      <h1 className="font-semibold text-[80px]  mt-5">177.49 USD</h1>
      <div className="stat-actions"></div>
    </div>
  </div>
  )
}
