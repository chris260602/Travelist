import React, { Fragment } from "react";
import classes from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { item } = props;

  return (
    <Fragment>
      <div className={classes.cardContainer}>
        <Link
          to={`/productdetail/${item._id}`}
          className={classes.card}
          key={item.id}
        >
          <div className={classes.card_img}>
            <img src={item.mainPicture} alt="error" />
          </div>
          <div className={classes.card_header}>
            <div className={classes.info}>
              <h4>{item.productName}</h4>
              <p className={classes.card_price}>
                <span>Rp.</span>
                {item.productPrice}
              </p>
              <div className={classes.bottomContainer}>
                <p>
                  {item.productSold} <span> Sold</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default ProductCard;
