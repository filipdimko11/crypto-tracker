import React from "react";

const CoinsHeader = () => {
  return (
    <div
      className="grid md:grid-cols-6  grid-cols-3 text-sm align-center py-4
     justify-items-start items-center gap-y-4
      rounded-lg px-8 bg-[#26272b] box-shadow-lg"
    >
      <div>Rank </div>
      <div>Coin</div>
      <div>Market cap</div>

      <div>Price</div>
      <div>All-time high</div>
      <div>24h change</div>
    </div>
  );
};

export default CoinsHeader;
