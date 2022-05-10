import React from "react";
import classes from "../ProfilePage.module.css";

const changePassword = ({ handleClose }) => {
  return (
    <div className={classes.popUpBackground}>
      <div className={classes.popUpContainer}>
        <div className={classes.popUpTitle}>
          <div className={classes.Title}>
            <p>Change Email</p>
          </div>
          <div className={classes.Close}>
            <p onClick={handleClose}>&times;</p>
          </div>
        </div>
        <div className={classes.popUpContent}>
          <div className={classes.contentWarning}>
            Make sure your new email is active.
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputBox}>
              <input type="text" placeholder="New Email" />
            </div>

            <div className={classes.inputButton} onClick={handleClose}>
              <p>Save Changes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default changePassword;
