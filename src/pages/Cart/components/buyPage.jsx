import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./buyPage.module.css";

const BuyPage = (props) => {
  const { data } = props;
  console.log(props);
  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={classes.backDrop}
        onClick={() =>
          props.cancelModalHandler({
            active: false,
          })
        }
      ></div>
      <div className={classes.container}>
        <h1 className={classes.transactionDetailTitle}>Transaction Detail</h1>
        <div className={classes.detail}>
          <p className={classes.totalPrice}>
            Total Price:
            <span>
              {" "}
              Rp<span> {data.totalPrice}</span>
            </span>
          </p>
          <p className={classes.balance}>
            Balance:
            <span>
              {" "}
              Rp<span> {data.balance}</span>
            </span>
          </p>
          <p className={classes.newBalance}>
            New Balance:
            <span className={classes.newBalanceAmount}>
              {" "}
              Rp
              <span> {data.balance - data.totalPrice}</span>
            </span>
          </p>
        </div>
        <div className={classes.ButtonContainer}>
          <p
            className={classes.button}
            onClick={() =>
              props.cancelModalHandler({
                active: false,
              })
            }
          >
            Cancel
          </p>
          {data.balance - data.totalPrice < 0 ? (
            <Link to={"/topup"} className={classes.button}>
              Top Up
            </Link>
          ) : (
            <p className={classes.button}>Purchase</p>
          )}
        </div>
      </div>
    </Fragment>,
    document.getElementById("card")
  );
};

export default BuyPage;
