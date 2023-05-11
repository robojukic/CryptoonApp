import React, { useState, useEffect } from "react";
import "./Featured.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";

function Featured() {
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
    <div className="featured">
      <div className="coin">
        <img className="coin-img" src={data && data[0].image} alt="" />
        <div className="coin-data">
          <h5>{data && data[0].name}</h5>

          {data && data[0].price_change_percentage_24h > 0 ? (
            <span className="green">
              {" "}
              <FiArrowUpRight />{" "}
              {data && data[0].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          ) : (
            <span className="red">
              {" "}
              <FiArrowDown />{" "}
              {data && data[0].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          )}
          <p>
            {data &&
              data[0].current_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </p>
        </div>
      </div>
      <div className="coin">
        <img className="coin-img" src={data && data[1].image} alt="" />
        <div className="coin-data">
          <h5>{data && data[1].name}</h5>
          {data && data[1].price_change_percentage_24h > 0 ? (
            <span className="green">
              {" "}
              <FiArrowUpRight />{" "}
              {data && data[1].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          ) : (
            <span className="red">
              {" "}
              <FiArrowDown />{" "}
              {data && data[1].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          )}
          <p>
            {data &&
              data[1].current_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </p>
        </div>
      </div>
      <div className="coin">
        <img className="coin-img" src={data && data[2].image} alt="" />
        <div className="coin-data">
          <h5>{data && data[2].name}</h5>
          {data && data[2].price_change_percentage_24h > 0 ? (
            <span className="green">
              {" "}
              <FiArrowUpRight />{" "}
              {data && data[2].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          ) : (
            <span className="red">
              {" "}
              <FiArrowDown />{" "}
              {data && data[2].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          )}
          <p>
            {data &&
              data[2].current_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </p>
        </div>
      </div>
      <div className="coin">
        <img className="coin-img" src={data && data[3].image} alt="" />
        <div className="coin-data">
          <h5>{data && data[3].name}</h5>
          {data && data[3].price_change_percentage_24h > 0 ? (
            <span className="green">
              {" "}
              <FiArrowUpRight />{" "}
              {data && data[3].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          ) : (
            <span className="red">
              {" "}
              <FiArrowDown />{" "}
              {data && data[3].price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          )}
          <p>
            {data &&
              data[3].current_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
