import React from "react";
import classes from "../ProfilePage.module.css";

const deleteAccount = ({ handleClose }) => {
  return (
    <div className={classes.popUpBackground}>
      <div className={classes.popUpContainer}>
        <div className={classes.popUpTitle}>
          <div className={classes.Title}>
            <p>Delete Account</p>
          </div>
          <div className={classes.Close}>
            <p onClick={handleClose}>&times;</p>
          </div>
        </div>
        <div className={classes.popUpContent}>
          <div className={classes.contentWarning}>
            Your account will be completely gone once you’ve deleted your
            account
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputBox}>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
            </div>
            <a href="#" onClick={handleClose}>
              <div className={`${classes.inputButton} ${classes.delete}`}>
                Delete Account
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default deleteAccount;
