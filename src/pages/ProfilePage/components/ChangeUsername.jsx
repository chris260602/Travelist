import axios from "axios";
import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import classes from "../ProfilePage.module.css";

const ChangeUsername = ({ handleClose, refreshUserData }) => {
  const input = useRef();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirm = async () => {
    if (input.current.value.length >= 6) {
      setIsLoading(true);

      try {
        const body = {
          id: user.userID,
          newName: input.current.value,
        };
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/changeusername`,
          {
            body,
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (e) {
        // console.log(e);
        alert("Something Went Wrong");
      }

      setIsLoading(false);
      handleClose();
    }
  };
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backDrop}></div>
      <div className={classes.popUpBackground}>
        <div className={classes.popUpContainer}>
          <div className={classes.popUpTitle}>
            <div className={classes.Title}>
              <p>Change Username</p>
            </div>
            <div className={classes.Close}>
              <p onClick={handleClose}>&times;</p>
            </div>
          </div>
          <div className={classes.popUpContent}>
            <div className={classes.contentInfo}>
              You can change your name only once
            </div>
            <div className={classes.inputContainer}>
              <div className={classes.inputBox}>
                <input type="text" placeholder="Min 6 Characters" ref={input} />
              </div>
              {isLoading ? (
                ""
              ) : (
                <div
                  className={classes.inputButton}
                  onClick={() => handleConfirm().then(() => refreshUserData())}
                >
                  <p>Save changes</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>,
    document.getElementById("loader")
  );
};

export default ChangeUsername;
