import React from "react";
import Coin from "./Coin";
import { useState } from "react";
import { useEffect } from "react";

const CoinWrapper = (props) => {
  const coins = props.props;

  return (
    <div>
      <div>
        {coins.map((coin) => {
          return <Coin key={coin.id} props={coin} />;
        })}
      </div>
    </div>
  );
};

export default CoinWrapper;
