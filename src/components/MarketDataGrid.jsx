import React from "react";

const MarketDataGrid = (props) => {
  const coin = props.props;
  console.log(coin);
  return (
    <div>
      <div className="grid grid-cols-2">
        <div
          className="grid grid-rows-2 bg-secondary rounded-sm text-sm 
        text-left px-6 "
        >
          <div className="my-4 relative">
            24 Hour Low:
            <span className="absolute right-2">
              $
              {coin?.market_data?.low_24h?.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <hr className="mt-1" />
          </div>
          <div className="my-4 relative">
            24 Hour High:
            <span className="absolute right-2">
              $
              {coin?.market_data?.high_24h?.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <hr className="mt-1" />
          </div>
        </div>
        <div
          className="grid grid-rows-2 bg-secondary rounded-sm text-sm 
        text-left pr-6"
        >
          <div className="my-4 relative">
            Market cap:
            <span className="absolute right-2">
              $
              {coin?.market_data?.market_cap?.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <hr className="mt-1" />
          </div>
          <div className="my-4 relative">
            Circulating Supply:
            <span className="absolute right-2">
              {coin?.market_data?.circulating_supply.toLocaleString(
                undefined,
                {}
              )}
            </span>
            <hr className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDataGrid;
