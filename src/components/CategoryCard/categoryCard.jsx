import React, { useEffect } from "react";
import categoryCardData from "./categoryCardData";
import classes from "./categoryCard.module.css";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  const { item } = props;
  return (
    <Link to={"/products"} className={classes.card} key={item.id}>
      <div className={classes.card_img}>
        <img src={item.categoryIcon} alt="error" />
      </div>
      <div className={classes.card_header}>
        <p>{item.categoryName}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
