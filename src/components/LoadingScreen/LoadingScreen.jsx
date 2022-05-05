import classes from "./LoadingScreen.module.css";
import loader from "../../assets/svg_animation/loader.svg";
import emptyCart from "./empty-cart.png";
const LoadingScreen = () => {
  return (
    <div className={classes.LoadingContainer}>
      <img src={emptyCart} alt="cart" className={classes.cart} />
      <img src={loader} alt="loader" className={classes.loader} />
      <h3>Loading the webpage ...</h3>
    </div>
  );
};

export default LoadingScreen;
