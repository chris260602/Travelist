import axios from "axios";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "../ProfilePage.module.css";

const DeleteAccount = ({ handleClose, refreshUserData }) => {
  const userNameInput = useRef();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleConfirm = async () => {
    if (userNameInput.current.value === user.userName) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/user/deleteuser/${user.userID}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        refreshUserData();
        navigate("/");
      } catch (e) {
        console.log(e);
        alert("Something Went Wrong");
        return;
      }
    }
  };
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
              <input type="text" placeholder="Username" ref={userNameInput} />
            </div>
            <div
              className={`${classes.inputButton} ${classes.delete}`}
              onClick={handleConfirm}
            >
              Delete Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
