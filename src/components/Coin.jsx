import React from "react";
import { NumberFormatBase } from "react-number-format";
import { Link } from "react-router-dom";
import * as Bi from "react-icons/bi";
import CoinDetails from "./CoinDetails";
import { Button, Tooltip } from "@mui/material";

const Coin = (props) => {
  const coin = props.props;
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log("test");
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  //   console.log(coin);
  return (
    <div>
      <div
        className="grid 
        relative grid-cols-3 md:grid-cols-6 gap-y-4 text-sm bg-[#272f36] py-4 items-center my-4 
      rounded-lg hover:translate-y-[-0.2vh]
      px-8 justify-items-start
      shadow-2xl transition-all duration-300 ease-in-out"
      >
        <div className="">#{coin.market_cap_rank}</div>
        <div className="w-12">
          <div className="">
            <img src={coin.image} alt={coin.name} className="w-8 md:mx-auto" />
          </div>
          <div className="text-left md:text-center">{coin.name}</div>
        </div>
        <div className="">${coin.market_cap.toLocaleString()}</div>
        <div> ${coin.current_price}</div>
        <div>
          {" "}
          $
          {coin.ath.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          })}
        </div>
        <div className="">
          {" "}
          {coin.price_change_percentage_24h.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          %
        </div>
        <Link
          to={`/coin-details:${coin.id}`}
          target="_blank"
          className="hidden right-2 bottom-2 text-xs 
          cursor-pointer underline"
          element={<CoinDetails />}
          key={coin.id}
        >
          Learn more about {coin.name}
        </Link>
        <Link
          to={`/coin-details:${coin.id}`}
          target="_blank"
          className="md:right-2 top-1 right-1 absolute md:top-2 text-xs underline"
          element={<CoinDetails />}
          key={coin.id}
        >
          <div>
            <Bi.BiLinkExternal className="md:text-2xl text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Coin;
