import axios from "axios";
import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import classes from "../ProfilePage.module.css";

const ChangeProfilePicture = ({ handleClose, refreshUserData }) => {
  const input = useRef();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirm = async () => {
    setIsLoading(true);
    if (input.current.files[0] !== undefined) {
      let formData = new FormData();
      formData.append("profilePicture", input.current.files[0]);
      try {
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/changepicture/${user.userID}`,
          formData,
          {
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
    }
    setIsLoading(false);
    handleClose();
  };
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backDrop}></div>
      <div className={classes.popUpBackground}>
        <div className={classes.popUpContainer}>
          <div className={classes.popUpTitle}>
            <div className={classes.Title}>
              <p>Change Profile Picture</p>
            </div>
            <div className={classes.Close}>
              <p onClick={handleClose}>&times;</p>
            </div>
          </div>
          <div className={classes.popUpContent}>
            <div className={classes.contentInfo}>
              Change Your Profile Picture
            </div>
            <div className={classes.inputContainer}>
              <div className={classes.inputBox}>
                <input type="file" ref={input} />
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

export default ChangeProfilePicture;
