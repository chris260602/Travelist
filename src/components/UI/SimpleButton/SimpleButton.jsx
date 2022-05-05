import classes from "./SimpleButton.module.css";
const SimpleButton = (props) => {
  const size = parseInt(props.size);
  return (
    <button className={`${classes.simpleButton}`} style={{ fontSize: size }}>
      {props.children}
    </button>
  );
};
export default SimpleButton;
