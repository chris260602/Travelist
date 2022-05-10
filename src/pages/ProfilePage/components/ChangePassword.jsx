import React from "react";
import classes from "../ProfilePage.module.css";

const changePassword = ({ handleClose }) => {
  return (
    <div className={classes.popUpBackground}>
      <div className={classes.popUpContainer}>
        <div className={classes.popUpTitle}>
          <div className={classes.Title}>
            <p>Change Password</p>
          </div>
          <div className={classes.Close}>
            <p onClick={handleClose}>&times;</p>
          </div>
        </div>
        <div className={classes.popUpContent}>
          <div className={classes.contentWarning}>
            Please never share your password with anyone !
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputBox}>
              <input type="text" placeholder="Old Password" />
              <input type="text" placeholder="New Password" />
            </div>
            <a href="#" onClick={handleClose}>
              <div className={classes.inputButton}>Save changes</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default changePassword;
