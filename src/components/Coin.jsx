import React from "react";
import { NumberFormatBase } from "react-number-format";
import { Link } from "react-router-dom";
import CoinDetails from "./CoinDetails";

const Coin = (props) => {
  const coin = props.props;
  //   console.log(coin);
  return (
    <div>
      <div
        className="grid relative grid-cols-6 text-sm bg-[#272f36] py-4 items-center my-4 
      rounded-lg hover:translate-y-[-0.2vh]
      px-8 justify-items-start
      shadow-2xl transition-all duration-300 ease-in-out"
      >
        <div className="">#{coin.market_cap_rank}</div>
        <div className="w-12">
          <div className="">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-8 pb-1 mx-auto"
            />
          </div>
          <div className="">{coin.name}</div>
        </div>
        <div className="">${coin.market_cap.toLocaleString()}</div>
        <div> ${coin.current_price}</div>
        <div> ${coin.ath.toLocaleString()}</div>
        <div className=""> {coin.price_change_percentage_24h}%</div>
        <Link
          to={`/coin-details:${coin.id}`}
          target="_blank"
          className="absolute cursor-pointer right-4 w-20 underline"
          element={<CoinDetails />}
          key={coin.id}
        >
          Learn more about {coin.name}
        </Link>
      </div>
    </div>
  );
};

export default Coin;
