import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";
import axios from "axios";
import CoinWrapper from "./CoinWrapper";
import Counter from "./Counter";
import { FaCoins } from "react-icons/fa";
import EditParameters from "./EditParameters";

const Header = () => {
  const [currency, setCurrency] = useState("usd");
  const [coins, setCoins] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=15&page=1&sparkline=false`;

  async function fetchData() {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(coins);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="font-bold text-center md:text-2xl md:pt-4">
      <div className="flex justify-center items-center">
        <FaCoins className="mr-2 text-[#6900ff]" />
        Coin Tracker&nbsp;<p className="text-[#6900ff]"> Live</p>
      </div>
      <Counter fetchData={fetchData} />
      <CoinWrapper props={coins} />
    </div>
  );
};

export default Header;
