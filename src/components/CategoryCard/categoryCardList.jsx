import React, { Fragment } from "react";
import CategoryCard from "./categoryCard";
import classes from "./categoryCardList.module.css";

const CategoryCardList = (props) => {
  let listItems = [];
  const { data } = props;
  for (let i = 0; i < data.length; i++) {
    if (!props.seeAll && i >= 5) {
      break;
    }
    listItems.push(<CategoryCard item={data[i]} key={data[i]._id} />);
  }

  return <div className={classes.category_list}>{listItems}</div>;
};

export default CategoryCardList;