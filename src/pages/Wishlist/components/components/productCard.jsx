import React, { Fragment, useState } from "react";
import classes from "./productCard.module.css";
import { Link } from "react-router-dom";
import Wishlist from "../../../../components/WishList/Wishlist";
import axios from "axios";
import { useSelector } from "react-redux";

const ProductCard = (props) => {
  const { item } = props;
  const { productID } = item;
  const [isWishList, setIsWishlist] = useState(true);
  const [loadingWishList, setLoadingWishList] = useState(false);
  const user = useSelector((state) => state.user);

  const handleAddWishlist = async (id) => {
    setLoadingWishList(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/favourite/add`,
        {
          userID: user.userID,
          productID: id,
        },
        {
          withCredentials: true,
        }
      );
      setIsWishlist(true);
    } catch (e) {
      alert("Something went wrong");
    }
    setLoadingWishList(false);
  };
  const handleRemoveWishList = async (id) => {
    setLoadingWishList(true);
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/favourite/delete`,
        {
          data: {
            userID: user.userID,
            productID: id,
          },

          withCredentials: true,
        }
      );
      setIsWishlist(false);
    } catch (e) {
      alert("Something went wrong");
    }
    setLoadingWishList(false);
  };
  return (
    <Fragment>
      <div className={classes.cardContainer} key={productID._id}>
        <Link to={`/productdetail/${productID._id}`} className={classes.card}>
          <div className={classes.card_img}>
            <img src={productID.mainPicture} alt="error" />
          </div>
          <div className={classes.card_header}>
            <div className={classes.info}>
              <h4>{productID.productName}</h4>
              <p className={classes.card_price}>
                <span>Rp. </span>
                {productID.productPrice}
              </p>
              <div className={classes.bottomContainer}>
                <p>
                  {productID.productSold} <span> Sold</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className={classes.wishListIcon}>
          {loadingWishList ? (
            ""
          ) : (
            <Wishlist
              isWishList={isWishList}
              handleAdd={() => handleAddWishlist(productID._id)}
              handleRemove={() => handleRemoveWishList(productID._id)}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
