import React, { Fragment, useEffect } from "react";
import classes from "./History.module.css";
import HistoryProductContainer from "../../components/HistoryProductContainer/HistoryProductContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const History = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user.userRole === -1 || user.userRole === 1) {
      navigate("/login");
    }
  }, []);

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
