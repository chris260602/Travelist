import loader from "../../../assets/svg_animation/loader.svg";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.loaderContainer}>
      <img src={loader} alt="Loading..." className={classes.loader} />
    </div>
  );
};

export default Loader;
