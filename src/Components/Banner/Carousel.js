import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "./styles.css";
import { numberWithCommas } from "../CoinsTable";

SwiperCore.use([Autoplay]);

const Carousel = () => {
  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
    mySwiper: {
      marginTop: "3em",
    },
  }));

  const classes = useStyles();

  const [trending, setTrendings] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrendings(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div className={classes.carousel}>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },

          512: {
            slidesPerView: 4,
          },
        }}
        className={classes.mySwiper}
      >
        {trending.map((coin) => (
          <SwiperSlide>
            <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
              <img
                src={coin?.image}
                alt={coin.name}
                height="80"
                style={{ marginBottom: 10 }}
              />
              <span>
                {coin?.symbol}
                &nbsp;
                <span
                  style={{
                    color:
                      coin?.price_change_percentage_24h > 0
                        ? "rgb(14, 203, 129)"
                        : "red",
                    fontWeight: 500,
                  }}
                >
                  {coin?.price_change_percentage_24h >= 0 && "+"}
                  {coin?.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </span>
              <span style={{ fontSize: 22, fontWeight: 500 }}>
                {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
