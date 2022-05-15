import React, { Fragment, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import ProductCart from "../../components/ProductCart/ProductCart";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyPage from "./components/buyPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [getTdPromt, setTdPromt] = useState({
    active: false,
  });
  useEffect(() => {
    if (!user || user.userRole === -1 || user.userRole === 1) {
      navigate("/login");
    }

    if (getTdPromt.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [getTdPromt]);
  return (
    <Fragment>
      {getTdPromt.active ? (
        <BuyPage product={getTdPromt} cancelModalHandler={setTdPromt} />
      ) : (
        ""
      )}
      <Header />
      <div className={classes.container}>
        <div className={classes.cartTitle}>
          <p>Cart</p>
        </div>
        <div className={classes.content}>
          <div className={classes.cartProduct}>
            <ProductCart />
          </div>
          <div className={classes.cartSummary}>
            <div className={classes.summaryInfo}>
              <p className={classes.summaryTitle}> Summary</p>
              <p className={classes.totalItems}>
                {" "}
                <span>Total Items: </span>2
              </p>
              <p className={classes.totalPrice}>
                <span>Total Price: </span>Rp 250000
              </p>
            </div>
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
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Cart;
