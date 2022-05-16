import React from "react";
import categoryCardData from "./categoryCardData";
import classes from "./categoryCard.module.css";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  let listItems = [];
  for (let i = 0; i < categoryCardData.length; i++) {
    if (!props.seeAll && i >= 5) {
      break;
    }

    listItems.push(
      <Link
        to={"/productdetail"}
        className={classes.card}
        key={categoryCardData[i].id}
      >
        <div className={classes.card_img}>
          <img src={categoryCardData[i].img} alt="error" />
        </div>
        <div className={classes.card_header}>
          <p>{categoryCardData[i].categoryName}</p>
        </div>
      </Link>
    );
  }

  return <div className={classes.category_list}>{listItems}</div>;
};

export default CategoryCard;
