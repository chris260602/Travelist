import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import classes from "../ProfilePage.module.css";

const ChangePassword = ({ handleClose, refreshUserData }) => {
  const input = useRef();
  const newInput = useRef();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirm = async () => {
    if (newInput.current.value.length >= 6 && input.current.value.length >= 6) {
      setIsLoading(true);

      try {
        const body = {
          id: user.userID,
          oldPassword: input.current.value,
          newPassword: newInput.current.value,
        };
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/changeuserpassword`,
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
              <input type="text" placeholder="Old Password" ref={input} />
              <input type="text" placeholder="New Password" ref={newInput} />
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
  );
};

export default ChangePassword;
