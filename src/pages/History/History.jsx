import React, { Fragment } from "react";
import classes from "./History.module.css";
import HistoryProductContainer from "../../components/HistoryProductContainer/HistoryProductContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const History = () => {
  return (
    <Fragment>
      <Header />
      <div className={classes.Container}>
        <div className={classes.ContainerHeader}>
          <h1>History</h1>
        </div>
        <HistoryProductContainer />
      </div>
      <Footer />
    </Fragment>
  );
};

export default History;