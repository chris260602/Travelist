import classes from "./SpecialCard.module.css";
const SpecialCard = (props) => {
  return (
    <div className={classes.cardContainer} key={props.id}>
      <div className={classes.topContainer}>
        <div className={classes.imgContainer}>
          <img src={props.imgURL} alt="ERROR" />
        </div>
        <div className={classes.mainInfoContainer}>
          {props.info.map((data) => (
            <div className={classes.infoContainer}>
              <h3>{data.title}</h3>
              <p>{data.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.editButton} onClick={props.editHandler}>
          <p>Edit</p>
        </div>
        <div className={classes.removeButton} onClick={props.removeHandler}>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
