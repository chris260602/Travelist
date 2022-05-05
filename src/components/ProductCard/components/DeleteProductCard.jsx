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
        <h1>Delete Product</h1>
        <p>Are you sure you want to delete {productName}</p>
        <p>Product that is deleted will be lost forever!</p>
        <div className={classes.ButtonContainer}>
          <p
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
          <p onClick={() => alert(productID)}>Delete</p>
        </div>
      </div>
    </Fragment>,
    document.getElementById("card")
  );
};

export default DeleteProductCard;
