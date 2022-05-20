import React, { Fragment, useEffect } from "react";
import classes from "./Wishlist.module.css";
import ProductList from "./components/productList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user || user.userRole === -1 || user.userRole === 1) {
      navigate("/login");
      return;
    }

    document.title = "Wishlist | Travelist";
  }, []);
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.titleOfSection}>
          <p>Wishlist</p>
        </div>
        <ProductList />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Wishlist;
