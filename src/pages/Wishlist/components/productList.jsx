import React, { Fragment, useEffect, useState } from "react";
import classes from "./productList.module.css";
import ProductCard from "./components/productCard";
import { useSelector } from "react-redux";
import axios from "axios";

const ProductList = (props) => {
  const [wishListData, setWishListData] = useState([]);
  const [wishListLoading, setWishListLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.userRole === 0) {
      getFavouritesProductsDataHander();
    }
  }, []);
  const getFavouritesProductsDataHander = async () => {
    setWishListLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/favourite/getUserProducts/${user.userID}`,

        {
          withCredentials: true,
        }
      );
      setWishListData(response.data.data);
    } catch (e) {
      alert("Please refresh your browser");
    }
    setWishListLoading(false);
  };
  const listItems = wishListData.map((item) => (
    <Fragment>
      <ProductCard item={item} isAdmin={props.isAdmin} />
    </Fragment>
  ));

  return (
    <div className={classes.product_list}>
      {wishListLoading ? (
        <h1>Loading...</h1>
      ) : wishListData.length === 0 ? (
        <p>No Data..</p>
      ) : (
        listItems
      )}
    </div>
  );
};

export default ProductList;
