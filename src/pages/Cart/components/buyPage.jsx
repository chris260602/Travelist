import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./buyPage.module.css"

const BuyPage = (props) => {
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
            <span> Rp<span> 50.000</span></span>
          </p>
          <p className={classes.balance}>
            Balance:
            <span> Rp<span> 125.000</span></span>
          </p>
          <p className={classes.newBalance}>
            New Balance: 
            <span className={classes.newBalanceAmount}> Rp
                <span> 75.000</span>
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
          <p className={classes.button}>
            Purchase
          </p>
        </div>
      </div>
    </Fragment>,
    document.getElementById("card")
  );
};

export default BuyPage;