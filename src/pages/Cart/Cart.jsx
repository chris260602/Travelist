import React, { Fragment, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import ProductCart from "../../components/ProductCart/ProductCart";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyPage from "./components/buyPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCartList from "../../components/ProductCart/ProductCartList";
import axios from "axios";
import { login } from "../../store/reducers/userReducer/userReducer";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getTdPromt, setTdPromt] = useState({
    active: false,
  });
  const [cartData, setCartData] = useState([]);
  const [cartDataLoading, setCartDataLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [isDataChange, setDataChange] = useState(false);
  const [totalAmountChange, setTotalAmountChange] = useState(false);
  const [totalAmountChangeLoading, setTotalAmountChangeLoading] =
    useState(false);
  const [summaryData, setSummaryData] = useState({});
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  useEffect(() => {
    if (!user || user.userRole === -1 || user.userRole === 1) {
      navigate("/login");
      return;
    }
    if (getTdPromt.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (isFirstTime) {
      handlePageStart();
      refreshUserData();
      handleReloadTotalPrice();
    }
    if (isDataChange && !isFirstTime) {
      handleReloadCartData();
    }
    if (totalAmountChange && !isFirstTime) {
      handleReloadTotalPrice();
    }
    setIsFirstTime(false);
  }, [getTdPromt, isDataChange, totalAmountChange]);
  const handlePageStart = async () => {
    setPageLoading(true);
    await getCartData();
    setPageLoading(false);
  };
  const handleReloadCartData = async () => {
    await getCartData();
    await handleReloadTotalPrice();
    setDataChange(false);
  };
  const handleReloadTotalPrice = async () => {
    setTotalAmountChangeLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      const cartData = response.data.data;
      handleRestrictProductStocks(response.data.data);
      let totalItem = 0;
      let totalPrice = 0;
      cartData.forEach((item) => {
        totalItem += item.quantity;
        totalPrice += item.quantity * item.productID.productPrice;
      });
      setSummaryData({
        totalItem: totalItem,
        totalPrice: totalPrice,
      });
    } catch (e) {
      alert("Please refresh your browser");
    }
    setTotalAmountChangeLoading(false);
    setTotalAmountChange(false);
  };
  const getCartData = async () => {
    setCartDataLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      // console.log(response.data.data);
      handleRestrictProductStocks(response.data.data);
      setCartData(response.data.data);
    } catch (e) {
      alert("Please refresh your browser");
    }
    setCartDataLoading(false);
  };
  const handleRestrictProductStocks = (productDatas) => {
    productDatas.forEach((data) => {
      if (data.productID.productStocks < data.quantity) {
        setSoldOut(true);
        return;
      } else {
        setSoldOut(false);
      }
    });
  };
  const handleBuyProducts = async () => {
    setPurchaseLoading(true);
    try {
      const products = cartData.map((item) => {
        return {
          productID: item.productID._id,
          quantity: item.quantity,
        };
      });
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/transaction/add`,
        {
          userID: user.userID,
          products: products,
          totalItem: summaryData.totalItem,
          totalPrice: summaryData.totalPrice,
        },
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      alert("Please refresh your browser");
    }
    navigate("/");
    setPurchaseLoading(false);
  };
  const refreshUserData = async () => {
    try {
      const userData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/getuser/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      dispatch(login(userData.data.data));
    } catch (e) {
      alert("Something went wrong");
    }
  };
  return (
    <Fragment>
      {getTdPromt.active ? (
        <BuyPage
          product={getTdPromt}
          cancelModalHandler={setTdPromt}
          data={{
            totalPrice: summaryData.totalPrice,
            balance: user.balance,
          }}
          handleBuyProducts={handleBuyProducts}
          purchaseLoading={purchaseLoading}
        />
      ) : (
        ""
      )}
      <Header />
      <div className={classes.container}>
        {pageLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Fragment>
            <div className={classes.cartTitle}>
              <p>Cart</p>
            </div>
            <div className={classes.content}>
              <div className={classes.cartProduct}>
                {cartDataLoading ? (
                  <p>Loading...</p>
                ) : cartData === null || cartData.length === 0 ? (
                  <p>No Data</p>
                ) : (
                  <ProductCartList
                    data={cartData}
                    setDataChange={setDataChange}
                    setTotalAmountChange={setTotalAmountChange}
                  />
                )}
              </div>
              {totalAmountChangeLoading ? (
                <p>Loading...</p>
              ) : (
                <div className={classes.cartSummary}>
                  {summaryData.totalItem === 0 ? (
                    <p>Add Items to your cart to pay</p>
                  ) : (
                    <Fragment>
                      <div className={classes.summaryInfo}>
                        <p className={classes.summaryTitle}> Summary</p>
                        <p className={classes.totalItems}>
                          {" "}
                          <span>Total Items: </span>
                          {summaryData.totalItem}
                        </p>
                        <p className={classes.totalPrice}>
                          <span>Total Price: </span>Rp {summaryData.totalPrice}
                        </p>
                      </div>
                      {soldOut ? (
                        <div className={classes.buyNowButton}>
                          <p>Some products might be sold out.</p>
                        </div>
                      ) : (
                        <div
                          className={classes.buyNowButton}
                          onClick={() =>
                            setTdPromt({
                              active: true,
                            })
                          }
                        >
                          <p>Buy Now</p>
                        </div>
                      )}
                    </Fragment>
                  )}
                </div>
              )}
            </div>
          </Fragment>
        )}
      </div>

      <Footer />
    </Fragment>
  );
};

export default Cart;
