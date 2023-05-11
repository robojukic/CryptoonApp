import React, { useEffect, useState } from "react";
import "./Market.css";
import axios from "axios";

function Market() {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="market">
      <h1 className="market-title">Market Update</h1>

      <div className="market-coinList">
        <div className="market-coinList-top">
          <h2 className="align-left">Coin</h2>
          <h2>Price</h2>
          <h2>24h Change</h2>
          <h2>Market Cap</h2>
        </div>
        <div className="market-coinList-coins">
          {data &&
            data.map((coin) => (
              <div className="market-coinList-coin">
                <div className="coin-name">
                  <img
                    className="coinList-img"
                    src={data && coin.image}
                    alt=""
                  />
                  <p className="coinList-name">{data && coin.name}</p>
                </div>
                <p>
                  {data &&
                    coin.current_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                </p>
                <div>
                  {data && coin.price_change_percentage_24h > 0 ? (
                    <p className="green">
                      {data && coin.price_change_percentage_24h.toFixed(2)}%{" "}
                    </p>
                  ) : (
                    <p className="red">
                      {data && coin.price_change_percentage_24h.toFixed(2)}%{" "}
                    </p>
                  )}
                </div>
                <p>
                  {data &&
                    coin.market_cap.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Market;
