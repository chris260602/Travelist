import React, { useEffect, useState } from "react";
import classes from "./HistoryProductContainer.module.css";
import HistoryProductContainer_data from "./HistoryProductContainer_data";
import HistoryProductCard from "./HistoryProductCard";
import axios from "axios";
import { useSelector } from "react-redux";

const HistoryProductContainer = () => {
  const user = useSelector((state) => state.user);
  const [historyData, setHistoryData] = useState([]);
  const [loadingHistoryData, setLoadingHistoryData] = useState(false);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    setLoadingHistoryData(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/transaction/${user.userID}`,

        {
          withCredentials: true,
        }
      );
      setHistoryData(response.data.data);
    } catch (e) {
      alert("Something went wrong");
    }
    setLoadingHistoryData(false);
  };

  const HistoryProductContainerList = historyData.map((item) => (
    <HistoryProductCard data={item} key={item._id} />
  ));

  return (
    <div className={classes.HistoryProductContainer_list}>
      {loadingHistoryData ? <h1>Loading...</h1> : HistoryProductContainerList}
    </div>
  );
};

export default HistoryProductContainer;
