import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingCoins } from "../../config/api";
import "react-alice-carousel/lib/alice-carousel.css";
import "./header.css";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const currency = "INR";

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}


const Header = () => {

    const [trending, setTrending] = useState([])

    const fetchTrendingCoins =async ()=> {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data)
    };

 

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;
        return (
            <Link className="carousal" to={'/'}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />
                <div className="profit">
                <span className="symbol">
                    {coin?.symbol}
                    &nbsp;
                </span>
                <span style={{
                    color: profit > 0 ? "rgb(14,203,123)" : "red",
                    fontWeight: 500,
                }}>
                    {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
                 </span>
                 </div>
                 <span className="price">
                     ₹ {numberWithCommas(coin?.current_price.toFixed(2))}
                 </span>
            </Link>
        )
    } )

 

    useEffect(() => {
        fetchTrendingCoins();
    }, [])

    const responsive = {
        0: {
          items: 1,
        },
        512: {
          items: 3,
        },
      };


  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>
              Buy or Swap Your Digital Assets In The Most Secure Way Possible
            </h1>
          </div>
          <div className="desc">
            <p>
              Rypto Carbon is the easiest, safest, and fastest way to swap any
              of your cryptocurrency. Our goal is to provide direct and
              regulated access to the digital access world
            </p>
          </div>
        </div>
      </div>
      <div className="list">
        <div className="slider">
          <AliceCarousel
            // mouseTracking
            autoPlay
            autoPlayInterval={100}
            animationDuration={2500}
            disableDotsControls
            disableButtonsControls
            infinite={true}
            responsive={responsive}
            items={items}
          />
        </div>
      </div>
    </>
  );
}

export default Header