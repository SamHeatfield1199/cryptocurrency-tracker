import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#131129",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<Coinpage />} />
        </Routes>
        <Footer />
      </div>
      <Alert />
    </BrowserRouter>
  );
}
export default App;
