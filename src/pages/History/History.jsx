import React, { Fragment, useEffect } from "react";
import classes from "./History.module.css";
import HistoryProductContainer from "./HistoryProductContainer/HistoryProductContainer";
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
      <div className={classes.container}>
        <div className={classes.titleOfSection}>
          <p>History</p>
        </div>
        <HistoryProductContainer />
      </div>
      <Footer />
    </Fragment>
  );
};

export default History;
