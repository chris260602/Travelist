import React, { Fragment } from "react";
import classes from "./ProductPage.module.css";
import ProductList from "../../components/ProductList/productList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductAdmin from "../Products/Products";
import { useSelector } from "react-redux";

const Products = () => {
  const user = useSelector((state) => state.user);
  return user.userRole === 1 ? (
    <ProductAdmin />
  ) : (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.titleOfSection}>
          <p>Products</p>
        </div>
        <ProductList />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
