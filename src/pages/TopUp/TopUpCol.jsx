import { Fragment, useEffect } from "react";
import { useState } from "react";
import classes from "./TopUpCol.module.css";

import SimpleModal from "./components/SimpleModal";
const TopUpCol = (props) => {
  const [item, setItem] = useState(null);
  const [buttonHandler, setButtonHandler] = useState(null);
  const { data } = props;
  return (
    <Fragment>
      {item ? (
        <SimpleModal
          item={item}
          modalHandler={setItem}
          buttonHandler={buttonHandler}
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
              setButtonHandler(() => () => alert("Accept"));
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
              setButtonHandler(() => () => alert("decline"));
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
