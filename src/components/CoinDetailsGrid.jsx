import React, { useState } from "react";

const CoinDetailsGrid = (props) => {
  const [isReady, setIsReady] = useState(false);
  const coin = props.props;
  console.log(coin);

  return (
    <div>
      <div
        className="bg-[#272f36] rounded-lg shadow-xl
          my-4"
      >
        <div className="text-xl font-light md:py-4 pt-2">
          Change in time period
        </div>
        <div>
          <div
            className="grid md:gap-[0.5vh] gap-1 text-xs 
          grid-cols-6 md:text-xl md:mx-6 mx-6 md:p-0 py-2 md:my-0"
          >
            <div>
              <div className="bg-neutral-600 py-1 rounded-sm">1h</div>
              <div className="my-2">
                {coin?.market_data?.price_change_percentage_1h_in_currency?.usd.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                %
              </div>
            </div>
            <div>
              <div className="bg-neutral-600 py-1 rounded-sm">24h</div>
              <div className="my-2">
                {coin?.market_data?.price_change_percentage_24h_in_currency?.usd.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                %
              </div>
            </div>
            <div>
              <div className="bg-neutral-600 py-1 rounded-sm">7d</div>
              <div className="my-2">
                {coin?.market_data?.price_change_percentage_7d_in_currency?.usd.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </div>
            </div>
            <div>
              <div className="bg-neutral-600 py-1 rounded-sm">14d</div>
              <div className="my-2">
                {coin?.market_data?.price_change_percentage_14d_in_currency?.usd.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                %
              </div>
            </div>
            <div>
              <div className="bg-neutral-600 py-1 rounded-sm">30d</div>
              <div className="my-2">
                {coin?.market_data?.price_change_percentage_30d_in_currency?.usd.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                %
              </div>
            </div>
            <div>
              <div className="bg-neutral-600 py-1 rounded-sm">1y</div>
              <div className="my-2">
                {coin?.market_data?.price_change_percentage_1y_in_currency?.usd.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
                %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailsGrid;
