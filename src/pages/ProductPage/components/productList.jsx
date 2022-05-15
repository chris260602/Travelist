import React, { Fragment, useEffect, useState } from "react";
import classes from "./productList.module.css";
import ProductCard from "./components/productCard";
import ProductList_data from "./components/productCard_data";
import axios from "axios";

const ProductList = (props) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductsDataHander();
  }, []);
  const getProductsDataHander = async () => {
    // setIsLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/`,
      {
        withCredentials: true,
      }
    );
    setProductData(response.data.data);
  };
  const listItems = productData.map((item) => (
    <Fragment>
      <ProductCard item={item} isAdmin={props.isAdmin} />
    </Fragment>
  ));

  return <div className={classes.product_list}>{listItems}</div>;
};

export default ProductList;
