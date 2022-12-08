import React, { useState } from "react";

const CoinDetailsGrid = (props) => {
  const [isReady, setIsReady] = useState(false);
  const coin = props.props;
  console.log(coin);

  return (
    <div
      className="bg-[#272f36] py-6 rounded-lg shadow-xl
    my-4"
    >
      <div>
        <div className="grid gap-[0.5vh] text-base grid-cols-6 text-xl mx-6">
          <div>
            <div className="bg-neutral-600 py-1 rounded-sm">1h</div>
            <div className="my-2">
              {coin?.market_data?.price_change_percentage_1h_in_currency?.usd}%
            </div>
          </div>
          <div>
            <div className="bg-neutral-600 py-1 rounded-sm">24h</div>
            <div className="my-2">
              {coin?.market_data?.price_change_percentage_24h_in_currency?.usd}%
            </div>
          </div>
          <div>
            <div className="bg-neutral-600 py-1 rounded-sm">7d</div>
            <div className="my-2">
              {coin?.market_data?.price_change_percentage_7d_in_currency?.usd}
            </div>
          </div>
          <div>
            <div className="bg-neutral-600 py-1 rounded-sm">14d</div>
            <div className="my-2">
              {coin?.market_data?.price_change_percentage_14d_in_currency?.usd}%
            </div>
          </div>
          <div>
            <div className="bg-neutral-600 py-1 rounded-sm">30d</div>
            <div className="my-2">
              {coin?.market_data?.price_change_percentage_30d_in_currency?.usd}%
            </div>
          </div>
          <div>
            <div className="bg-neutral-600 py-1 rounded-sm">1y</div>
            <div className="my-2">
              {coin?.market_data?.price_change_percentage_1y_in_currency?.usd}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailsGrid;
