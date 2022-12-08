import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AboutCoin from "./AboutCoin";
import Coin from "./Coin";
import CoinDetailsGrid from "./CoinDetailsGrid";
import MarketDataGrid from "./MarketDataGrid";

const CoinDetails = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  const [coin, setCoin] = useState({});
  let { id } = useParams();
  id = id.slice(1, id.length);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-fit mx-[40vh] text-center text-4xl font-bold py-4">
      <div className="bg-secondary rounded-lg mt-10 py-6 shadow-xl">
        {coin.name}
      </div>
      <div className="bg-[#272f36] relative rounded-lg my-4 py-4">
        <div className="text-sm absolute w-fill left-6">
          Market cap rank: #{coin?.market_cap_rank}
        </div>
        <span
          style={{ fontWeight: "bolder" }}
          className="absolute text-xl bottom-0 right-6 mb-4"
        >
          ${coin?.market_data?.current_price?.usd.toLocaleString()}
        </span>
        <div className="grid mt-10">
          <div className="text-left flex gap-2 items-center">
            {coin.image ? (
              <img src={coin?.image?.large} className="w-8 ml-6" alt="" />
            ) : null}
            <div className="text-base">
              <div>
                <span className="text-sm">{coin?.name} </span>
                <span className="text-xs font-light">
                  {coin?.symbol?.toUpperCase()}/USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoinDetailsGrid props={coin} />
      <MarketDataGrid props={coin} />
      <AboutCoin props={coin} />
    </div>
  );
};

export default CoinDetails;
