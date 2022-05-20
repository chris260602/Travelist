import React from "react";
import classes from "./ProductCardList.module.css";

import ProductCard from "./ProductCard";

const ProductCardList = (props) => {
  const { data } = props;
  const listItems = data.map((item) => (
    <ProductCard item={item} isAdmin={props.isAdmin} key={item._id} />
  ));

  return <div className={classes.product_list}>{listItems}</div>;
};

export default ProductCardList;
