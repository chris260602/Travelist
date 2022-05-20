import React, { useState } from "react";
import classes from "./ProductCart.module.css";
import TrashIcon from "../../assets/img/trash.svg";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const ProductCart = (props) => {
  const { item } = props;
  const { productID } = item;
  const [amount, setAmount] = useState(props.item.quantity);
  const user = useSelector((state) => state.user);
  const [loadingCart, setLoadingCart] = useState(false);
  const updateCartQuantity = async (amountData) => {
    setLoadingCart(true);
    try {
      await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/cart/handleqty`,
        {
          userID: user.userID,
          productID: productID._id,
          quantity: amountData,
        },
        {
          withCredentials: true,
        }
      );
      props.setTotalAmountChange(true);
    } catch (e) {
      console.log("Please refresh your browser");
    }
    setLoadingCart(false);
  };
  const deleteCart = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart/delete`, {
        data: {
          userID: user.userID,
          productID: productID._id,
        },

        withCredentials: true,
      });
      props.setDataChange(true);
    } catch (e) {
      console.log("Please refresh your browser");
    }
  };

  const handleSubtract = () => {
    if (amount > 1) {
      updateCartQuantity(amount - 1);
      setAmount((prevState) => prevState - 1);
    }
  };
  const handleIncrement = () => {
    if (amount < productID.productStocks) {
      updateCartQuantity(amount + 1);
      setAmount((prevState) => prevState + 1);
    }
  };

  return (
    <div className={`${classes.cartCardContainer} ${classes.cart}`}>
      <Link to={`/productdetail/${productID._id}`}>
        <div className={classes.cart_img}>
          <img src={productID.mainPicture} alt="error" />
        </div>
      </Link>
      <div className={classes.cartDetail}>
        <div className={classes.cartHeader}>
          <div className={classes.productInfo}>
            {productID.productName}
            <p className={classes.cartPrice}>
              <span>Rp. </span>
              {productID.productPrice}
            </p>
          </div>
          <div className={classes.cartQuantity}>
            {loadingCart ? (
              ""
            ) : (
              <div
                className={classes.changeAmountIcon}
                onClick={handleSubtract}
              >
                <img
                  src="https://i.ibb.co/31VR1Vq/carbon-subtract-alt.png"
                  alt="error"
                />
              </div>
            )}

            <div className={classes.amountText}>
              <p>{amount}</p>
            </div>
            {loadingCart ? (
              ""
            ) : (
              <div
                className={classes.changeAmountIcon}
                onClick={handleIncrement}
              >
                <img
                  src="https://i.ibb.co/VVVXtH4/carbon-add-alt.png"
                  alt="error"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={classes.removeCart} onClick={deleteCart}>
        <img src={TrashIcon} alt="error" />
      </div>
    </div>
  );
};

export default ProductCart;
