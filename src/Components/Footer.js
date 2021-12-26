import { makeStyles } from "@material-ui/core";
import React from "react";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Montserrat",
      height: 100,
    },
    a: {
      cursor: "pointer",
      color: "#7B3094",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <span className={classes.title}>
        Data provided by&nbsp;
        <a href="https://www.coingecko.com/en" target="_blank" rel="noreferrer">
          CoinGecko
        </a>
      </span>
    </div>
  );
};

export default Footer;
