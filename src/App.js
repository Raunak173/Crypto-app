import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import "./App.css";

function App() {
  const useStyles = makeStyles({
    app: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
