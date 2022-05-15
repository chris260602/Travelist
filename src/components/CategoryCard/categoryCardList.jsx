import React, {Fragment} from "react";
import CategoryCard from "./categoryCard";
import classes from "./categoryCardList.module.css";

const CategoryCardList = (props) => {
    console.log(
        props
    )
    const { data } = props;
    const listItems = data.map((item) => (
      <Fragment>
        <CategoryCard item={item}/>
      </Fragment>
    ));
  

  return <div className={classes.category_list}>{listItems}</div>;
};

export default CategoryCardList;
