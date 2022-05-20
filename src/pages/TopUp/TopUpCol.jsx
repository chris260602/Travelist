import { Fragment } from "react";
import { useState } from "react";
import classes from "./TopUpCol.module.css";

import SimpleModal from "./components/SimpleModal";
import axios from "axios";
const TopUpCol = (props) => {
  const [item, setItem] = useState(null);
  const [buttonHandler, setButtonHandler] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data, fetchAllTopUpRequest } = props;
  const handleAcceptRequest = async () => {
    setIsLoading(true);
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/topup`, {
        data: {
          requestID: data.id,
          userID: data.userID,
        },
        withCredentials: true,
      });
    } catch (e) {
      alert("Something went wrong");
    }
    setIsLoading(false);
    fetchAllTopUpRequest();
  };
  const handleDeclineRequest = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/topup`, {
        data: {
          id: data.id,
        },
        withCredentials: true,
      });
    } catch (e) {
      alert("Something went wrong");
    }
    setIsLoading(false);
    fetchAllTopUpRequest();
  };
  return (
    <Fragment>
      {item ? (
        <SimpleModal
          item={item}
          modalHandler={setItem}
          buttonHandler={buttonHandler}
          isLoading={isLoading}
        />
      ) : (
        ""
      )}

      <div className={classes.TopUpColContainer}>
        <div className={classes.TopUpCol1}>
          <p>{data.name}</p>
        </div>
        <div className={classes.TopUpCol2}>
          <p>Rp {data.price}</p>
        </div>
        <div className={classes.TopUpColButtonContainer}>
          <div
            className={classes.acceptButton}
            onClick={() => {
              setItem({
                name: data.name,
                id: data.id,
                price: data.price,
                title: "Accept Top Up Request",
                desc: "Are you sure you want to give",
                warning: "Any actions that are made cannot be changed!",
              });
              setButtonHandler(() => () => handleAcceptRequest());
            }}
          >
            <p>Accept</p>
          </div>
          <div
            className={classes.declineButton}
            onClick={() => {
              setItem({
                name: data.name,
                id: data.id,
                title: "Decline Top Up Request",
                desc: "Are you sure you want to decline a top up request from",
                warning: "Any actions that are made cannot be changed!",
              });
              setButtonHandler(() => () => handleDeclineRequest());
            }}
          >
            <p>Decline</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopUpCol;
