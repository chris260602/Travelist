import React, { Fragment, useEffect, useState } from "react";
import classes from "./productList.module.css";
import ProductCard from "./components/productCard";
import ProductList_data from "./components/productCard_data";
import axios from "axios";

const ProductList = (props) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (props.isFilter) {
      getFilterProductsDataHander();
    } else {
      getProductsDataHander();
    }
  }, [props.isFilter]);
  const getProductsDataHander = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/`,
      {
        withCredentials: true,
      }
    );
    setIsLoading(false);
    setProductData(response.data.data);
  };
  const getFilterProductsDataHander = async () => {
    setIsLoading(true);
    const responses = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/filter/?name=${props.isFilter}`,
      {
        withCredentials: true,
      }
    );
    setIsLoading(false);
    setProductData(responses.data.data);
  };
  const listItems =
    productData.length === 0 ? (
      <h1>No Products</h1>
    ) : (
      productData.map((item) => (
        <ProductCard key={item._id} item={item} isAdmin={props.isAdmin} />
      ))
    );

  return (
    <div className={classes.product_list}>
      {isLoading ? <h1>Loading...</h1> : listItems}
    </div>
  );
};

export default ProductList;
