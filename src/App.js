import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Routes >
        <Route exact path="/" element={  <Homepage />} />
         
        <Route exact path="/coins/:id" element={  <Coinpage />} />
     
      </Routes>
    </div>
  );
}
export default App;