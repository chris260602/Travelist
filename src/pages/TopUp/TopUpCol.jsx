import classes from "./TopUpCol.module.css";
const TopUpCol = () => {
  return (
    <div className={classes.TopUpColContainer}>
      <div className={classes.TopUpCol1}>
        <p>User1</p>
      </div>
      <div className={classes.TopUpCol2}>
        <p>Rp 100.000</p>
      </div>
      <div className={classes.TopUpColButtonContainer}>
        <div className={classes.acceptButton}>
          <p>Accept</p>
        </div>
        <div className={classes.declineButton}>
          <p>Decline</p>
        </div>
      </div>
    </div>
  );
};

export default TopUpCol;
