import React from "react";

const CoinsHeader = () => {
  return (
    <div
      className="grid grid-cols-6 text-lg align-center py-4
     justify-items-start items-center
      rounded-lg px-8 bg-[#26272b] box-shadow-lg"
    >
      <div>Rank: </div>
      <div>Coin:</div>
      <div className="">Market cap:</div>
      <div>Price:</div>
      <div>All-time high:</div>

      <div>24h change:</div>
    </div>
  );
};

export default CoinsHeader;
