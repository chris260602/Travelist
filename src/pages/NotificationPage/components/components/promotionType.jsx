import React from "react";
// import promotion from "../../assets/img/promotion.png";
import classes from "./type.module.css";

const PromotionType = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <img
        //   src={promotion}
          className={classes.iconType}
          alt="error"
        />
      </div>
      <div>
          <p className={classes.typeName}>
              Promotion
          </p>
      </div>
    </div>
  );
};

export default PromotionType;