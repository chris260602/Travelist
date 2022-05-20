import React, { Fragment, useEffect, useState } from "react";
import classes from "./ProductPage.module.css";
import ProductList from "./components/productList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductAdmin from "../Products/Products";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Products = () => {
  const user = useSelector((state) => state.user);
  const params = useParams();
  const [isFilter, setIsFilter] = useState(params.filter);
  useEffect(() => {
    setIsFilter(params.filter);

    document.title = "Product | Travelist";
  }, [params]);
  return user.userRole === 1 ? (
    <ProductAdmin />
  ) : (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.titleOfSection}>
          <p>Products</p>
        </div>
        <ProductList isFilter={isFilter} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
