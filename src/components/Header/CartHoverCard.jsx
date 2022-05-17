import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/img/testingprofilepic.png";
import classes from "./CartHoverCard.module.css";
const CartHoverCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log(props.data);
    if (props.active === "true") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props]);
  return (
    <div
      className={`${classes.cartHoverCardMainContainer} ${
        isActive ? classes.active : ""
      }`}
    >
      <div className={classes.cartHoverCardTop}>
        <h3>Cart</h3>
        <Link to={"/cart"}>See More</Link>
      </div>
      <div className={`${classes.cartHoverCardContainer}`}>
        {props.data.products.length === 0 ? (
          <p>No Item on your cart</p>
        ) : (
          props.data.products.map((item) => (
            <Link to={"/cart"} className={classes.cartHoverCard}>
              <div className={classes.cartHoverCardImageContainer}>
                <img src={item.productPicture} alt="" />
              </div>
              <div className={classes.cartHoverCardTextContainer}>
                <h3>{item.productName}</h3>
                <p className={classes.totalItems}>{item.productAmount} Items</p>
                <p>Rp.{item.productPrice}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CartHoverCard;
