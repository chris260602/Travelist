import React from "react";
import classes from "./ProductCart.module.css";
import ProductCart from "./ProductCart";

const ProductCartList = (props) => {
  const { data } = props;
  const listItems = data.map((item) => (
    <ProductCart
      item={item}
      key={item._id}
      setDataChange={props.setDataChange}
      setTotalAmountChange={props.setTotalAmountChange}
    />
  ));

  return <div className={classes.product_list}>{listItems}</div>;
};

export default ProductCartList;
