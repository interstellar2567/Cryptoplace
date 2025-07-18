
import './coin.css'
import {Links, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CoinContext} from "../../context/CoinContext.jsx";
import LineChart from "../../components/LineChart/LineChart.jsx";

const Coin = () => {
    const {coinId} = useParams();
    const [coinData, setCoinData] = useState();
    const {currency} = useContext(CoinContext);
    const [HistoricalData, setHistoricalData] = useState();


    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': ''}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(res => setCoinData(res))
            .catch(err => console.error(err));
    }

    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': ''}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
            .then(res => res.json())
            .then(res => setHistoricalData(res))
            .catch(err => console.error(err));

    }



    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    },[currency])

  if(coinData && HistoricalData){
      return (
          <div className="coin">
              <div className="coin-name">
                  <img src={coinData.image.large} alt="img"/>
                  <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
              </div>
          <div className="coin-chart">
              <LineChart HistoricalData={HistoricalData}/>
          </div>
              <div className="coin-info">
                  <ul>
                      <li>
                          Crypto Market Rank
                      </li>
                      <li>
                          {coinData.market_cap_rank}
                      </li>
                  </ul>
                  <ul>
                      <li>
                          Current Price
                      </li>
                      <li>
                          {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
                      </li>
                  </ul>
                  <ul>
                      <li>
                          Market Cap
                      </li>
                      <li>
                          {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}
                      </li>
                  </ul>
                  <ul>
                      <li>
                          24H High
                      </li>
                      <li>
                          {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}
                      </li>
                  </ul>
                  <ul>
                      <li>
                          24H Low
                      </li>
                      <li>
                          {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}
                      </li>
                  </ul>
              </div>
          </div>
      )

  }else{
      return (
          <div className="spinner">
              <div className="spin"></div>
          </div>
      )
  }

}
export default Coin
