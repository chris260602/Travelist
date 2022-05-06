import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./DeleteProductCard.module.css";
const DeleteProductCard = (props) => {
  const { productID, productName } = props.product;
  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={classes.backDrop}
        onClick={() =>
          props.cancelModalHandler({
            active: false,
            productID: null,
            productName: null,
          })
        }
      ></div>
      <div className={classes.container}>
        <h1 className={classes.deleteTitle}>Delete Product</h1>
        <div>
          <p>
            Are you sure you want to delete{" "}
            <span className={classes.bold}>{productName}</span> ?
          </p>
          <p className={`${classes.red} ${classes.bold}`}>
            Product that is deleted will be lost forever!
          </p>
        </div>
        <div className={classes.ButtonContainer}>
          <p
            className={classes.cancelButton}
            onClick={() =>
              props.cancelModalHandler({
                active: false,
                productID: null,
                productName: null,
              })
            }
          >
            Cancel
          </p>
          <p className={classes.deleteButton} onClick={() => alert(productID)}>
            Delete
          </p>
        </div>
      </div>
    </Fragment>,
    document.getElementById("card")
  );
};

export default DeleteProductCard;
