import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { CryptoState } from "../../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});


const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Typography  onClick ={ () => navigate('/')} variant="h6" className={classes.title}>
            Crypto Atlas
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ width: 100, height: 40, marginLeft: 15, }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
