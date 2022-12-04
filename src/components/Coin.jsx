import React from "react";
import { NumberFormatBase } from "react-number-format";

const Coin = (props) => {
  const coin = props.props;
  //   console.log(coin);
  return (
    <div>
      <div
        className="grid text-sm bg-[#272f36] py-2 justify-items-start items-center my-4 
      grid-cols-5"
      >
        <div className="mx-auto">
          <div>
            <img
              src={coin.image}
              alt={coin.name}
              className="w-8 pb-1 mx-auto"
            />
          </div>
          <div>{coin.name}</div>
        </div>
        <div>Market cap: ${coin.market_cap.toLocaleString()}</div>
        <div>Current Price: ${coin.current_price}</div>
        <div>All-time high: ${coin.ath.toLocaleString()}</div>
        <div>24h price change: {coin.price_change_percentage_24h}%</div>
      </div>
    </div>
  );
};

export default Coin;
