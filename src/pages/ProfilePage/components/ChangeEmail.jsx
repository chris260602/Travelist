import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import classes from "../ProfilePage.module.css";

const ChangeEmail = ({ handleClose, refreshUserData }) => {
  const input = useRef();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirm = async () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.current.value)
    ) {
      setIsLoading(true);

      try {
        const body = {
          id: user.userID,
          newEmail: input.current.value,
        };
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/changeuseremail`,
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
              <input type="email" placeholder="New Email" ref={input} />
            </div>
            {isLoading ? (
              ""
            ) : (
              <div
                className={classes.inputButton}
                onClick={() => handleConfirm().then(() => refreshUserData())}
              >
                <p>Save Changes</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;
