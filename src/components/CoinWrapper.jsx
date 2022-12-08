import React from "react";
import Coin from "./Coin";
import { useState } from "react";
import { useEffect } from "react";
import CoinsHeader from "./CoinsHeader";

const CoinWrapper = (props) => {
  const coins = props.props;

  return (
    <div className="px-4">
      <CoinsHeader />
      <div className="">
        {coins.map((coin) => {
          return <Coin key={coin.id} props={coin} />;
        })}
      </div>
    </div>
  );
};

export default CoinWrapper;
