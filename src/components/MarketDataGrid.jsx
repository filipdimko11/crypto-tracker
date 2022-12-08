import React from "react";

const MarketDataGrid = (props) => {
  const coin = props.props;
  console.log(coin);
  return (
    <div className="rounded-xl ">
      <div
        className="grid grid-cols-2 bg-secondary 
        text-xs
          rounded-xl"
      >
        <div
          className="grid grid-rows-2 md:text-sm 
        text-left px-6 "
        >
          <div className="my-4 relative">
            24 Hour Low:
            <br className="flex md:hidden" />
            <span className="md:absolute font-light right-2">
              $
              {coin?.market_data?.low_24h?.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <hr className="hidden md:grid mt-1" />
          </div>
          <div className="my-4 relative">
            24 Hour High:
            <br className="flex md:hidden" />
            <span className="md:absolute font-light right-2">
              $
              {coin?.market_data?.high_24h?.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <hr className="hidden md:grid mt-1" />
          </div>
        </div>
        <div
          className="grid grid-rows-2 bg-secondary rounded-sm 
          text-xs md:text-sm
        text-left rounded-xl"
        >
          <div className="my-4 relative">
            Market cap:
            <br className="flex md:hidden" />
            <span className="md:absolute font-light right-2">
              $
              {coin?.market_data?.market_cap?.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <hr className="hidden md:grid mt-1" />
          </div>
          <div className="my-4 relative">
            Circulating Supply:
            <br className="flex md:hidden" />
            <span className="md:absolute font-light right-2">
              {coin?.market_data?.circulating_supply.toLocaleString(
                undefined,
                {}
              )}
            </span>
            <hr className="hidden md:grid mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDataGrid;
