import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./productDetail.module.css";
import Wishlist from "../../components/WishList/Wishlist";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const [productData, setProductData] = useState({});
  const [productImage, setProductImage] = useState({});
  const [isWishlist, setIsWishlist] = useState(false);
  const [loadingWishList, setLoadingWishList] = useState(false);
  const [amount, setAmount] = useState(1);
  const amountInput = useRef();
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  useEffect(() => {
    getProductDataHander();
    getFavouriteDataHander();
  }, [isWishlist]);
  const getProductDataHander = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
      {
        withCredentials: true,
      }
    );
    // console.log(response);
    setProductData(response.data.data);
    setProductImage(response.data.data.mainPicture);
  };
  const getFavouriteDataHander = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/favourite/getspecific/${user.userID}/${id}`,

        {
          withCredentials: true,
        }
      );
      if (response.data.data === null) {
        setIsWishlist(false);
      } else {
        setIsWishlist(true);
      }
    } catch (e) {
      alert("Please refresh your browser");
    }
  };
  const handleAddWishlist = async () => {
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
  const handleRemoveWishList = async () => {
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
  const handleSubtract = () => {
    if (amount > 1) {
      setAmount((prevState) => prevState - 1);
    }
  };
  const handleIncrement = () => {
    if (amount < productData.productStocks) {
      setAmount((prevState) => prevState + 1);
    }
  };
  const handleInputChange = () => {
    if (amountInput.current.value < 1) {
      setAmount(1);
    } else if (amountInput.current.value > productData.productStocks) {
      setAmount(productData.productStocks);
    } else {
      setAmount(amountInput.current.value);
    }
  };
  return (
    <Fragment>
      <Header />
      <div className={classes.rightContainer}>
        <div className={classes.firstContainer}>
          <div className={classes.productImage}>
            <div className={classes.mainImage}>
              <img
                src={productImage}
                className={classes.imageSection1}
                alt="error"
              />
            </div>
            <div className={classes.imageChoice}>
              {productData.mainPicture ? (
                <img
                  src={productData.mainPicture}
                  className={classes.imageSection2}
                  alt="error"
                  onClick={() => setProductImage(productData.mainPicture)}
                />
              ) : (
                ""
              )}
              {productData.picture2 ? (
                <img
                  src={productData.picture2}
                  className={classes.imageSection2}
                  alt="error"
                  onClick={() => setProductImage(productData.picture2)}
                />
              ) : (
                ""
              )}
              {productData.picture3 ? (
                <img
                  src={productData.picture3}
                  className={classes.imageSection2}
                  alt="error"
                  onClick={() => setProductImage(productData.picture3)}
                />
              ) : (
                ""
              )}
              {productData.picture4 ? (
                <img
                  src={productData.picture4}
                  className={classes.imageSection2}
                  alt="error"
                  onClick={() => setProductImage(productData.picture4)}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={classes.productInfo}>
            <div className={classes.section1}>
              <div className={classes.productTitle}>
                <p className={classes.productName}>{productData.productName}</p>
                <div className={classes.wishlistInProductInfo}>
                  <Wishlist
                    addHandler={handleAddWishlist}
                    removeHandler={handleRemoveWishList}
                  />
                </div>
              </div>
              <p className={classes.productSold}>
                {productData.productSold} sold
              </p>
            </div>
            <div className={classes.section2}>
              <p className={classes.productPrice}>
                Rp {productData.productPrice}
              </p>
            </div>
            <div className={classes.section3}>
              <p className={classes.productDescription}>Description</p>
              <p className={classes.productCategory}>
                category: {productData.categoryValue}
              </p>
              <p className={classes.productContentTitle}>content:</p>
              <p className={classes.productContent}>
                {productData.productContent}
              </p>
            </div>
          </div>
        </div>
        {user.userRole === 0 ? (
          <div className={classes.productCart}>
            <div className={classes.cartBox}>
              <div className={classes.amountTitle}>Amount</div>
              <div className={classes.amountCart}>
                <div className={classes.changeAmount}>
                  <div
                    className={classes.changeAmountIcon}
                    onClick={handleSubtract}
                  >
                    <img
                      src="https://i.ibb.co/31VR1Vq/carbon-subtract-alt.png"
                      alt="error"
                    />
                  </div>
                  <div className={classes.amountText}>
                    <input
                      type="number"
                      name=""
                      id=""
                      value={amount}
                      ref={amountInput}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div
                    className={classes.changeAmountIcon}
                    onClick={handleIncrement}
                  >
                    <img
                      src="https://i.ibb.co/VVVXtH4/carbon-add-alt.png"
                      alt="error"
                    />
                  </div>
                </div>
                <div className={classes.productStock}>
                  <p>
                    Stocks:{" "}
                    <span className={classes.stockAmount}>
                      {productData.productStocks}
                    </span>
                  </p>
                </div>
                <div className={classes.addCartButton}>Add to Cart</div>
              </div>
              <div className={classes.wishlistInProductCart}>
                {loadingWishList ? (
                  "Loading..."
                ) : (
                  <Fragment>
                    <Wishlist
                      isWishList={isWishlist}
                      handleAdd={handleAddWishlist}
                      handleRemove={handleRemoveWishList}
                    />
                    <p>Wishlist</p>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductDetail;
