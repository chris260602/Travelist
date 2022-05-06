import classes from "./DataIsEmpty.module.css";
const DataIsEmpty = () => {
  return (
    <div className={classes.isEmptyContainer}>
      <h3 className={classes.isEmptyDesc}>Data is empty...</h3>
    </div>
  );
};
export default DataIsEmpty;
