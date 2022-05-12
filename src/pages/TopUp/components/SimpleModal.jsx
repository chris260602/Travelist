import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./SimpleModal.module.css";
const SimpleModal = (props) => {
  const { title, desc, warning, name, id, price } = props.item;
  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={classes.backDrop}
        onClick={() => props.modalHandler(null)}
      ></div>
      <div className={classes.container}>
        <h1 className={classes.confirmTitle}>{title}</h1>
        <div>
          <p>
            {desc} <span className={classes.bold}>{name}</span>{" "}
            {!price ? "" : " Rp. " + price}?
          </p>
          <p className={`${classes.red} ${classes.bold}`}>{warning}</p>
        </div>
        <div className={classes.ButtonContainer}>
          {props.isLoading ? (
            ""
          ) : (
            <Fragment>
              <p
                className={classes.cancelButton}
                onClick={() => props.modalHandler(null)}
              >
                Cancel
              </p>
              <p
                className={classes.confirmButton}
                onClick={props.buttonHandler}
              >
                Confirm
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>,
    document.getElementById("loader")
  );
};

export default SimpleModal;
