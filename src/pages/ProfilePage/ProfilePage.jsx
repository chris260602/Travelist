import React, { Fragment, useEffect, useState } from "react";
import classes from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ChangeUsernamePopUp from "./components/ChangeUsername";
import ChangePasswordPopUp from "./components/ChangePassword";
import DeleteAccountPopUp from "./components/DeleteAccount";
import ChangeEmailPopUp from "./components/ChangeEmail";
import lockIcon from "../../assets/img/lockIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileConfirmationCard from "./components/ProfileConfirmationCard";
import ChangeProfilePicture from "./components/ChangeProfilePicture";
import { login, logoff } from "../../store/reducers/userReducer/userReducer";
import axios from "axios";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [prompt, setPrompt] = useState(null);
  console.log(user);
  const [UsernameVisible, setUsernameVisible] = useState(false);
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [DeleteVisible, setDeleteVisible] = useState(false);
  const [EmailVisible, setEmailVisible] = useState(false);
  const [AccountVisible, setAccountVisible] = useState(false);
  useEffect(() => {
    if (
      UsernameVisible ||
      PasswordVisible ||
      DeleteVisible ||
      EmailVisible ||
      AccountVisible
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    UsernameVisible,
    PasswordVisible,
    DeleteVisible,
    EmailVisible,
    AccountVisible,
  ]);
  const handleClickUsername = () => {
    setUsernameVisible(true);
  };
  const handleClickPassword = () => {
    setPasswordVisible(true);
  };
  const handleClickDelete = () => {
    setDeleteVisible(true);
  };
  const handleClickEmail = () => {
    setEmailVisible(true);
  };
  const handleClickAccount = () => {
    setAccountVisible(true);
  };

  const hideUsername = () => {
    setUsernameVisible(false);
  };
  const hidePassword = () => {
    setPasswordVisible(false);
  };
  const hideDelete = () => {
    setDeleteVisible(false);
  };
  const hideEmail = () => {
    setEmailVisible(false);
  };
  const hideAccount = () => {
    setAccountVisible(false);
  };
  const dispatch = useDispatch();
  const refreshUserData = async () => {
    const userData = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/getuser/${user.userID}`,
      {
        withCredentials: true,
      }
    );
    dispatch(login(userData.data.data));
  };
  return (
    <Fragment>
      {prompt ? (
        <ProfileConfirmationCard item={prompt} modalHandler={setPrompt} />
      ) : (
        ""
      )}
      <Header />
      <div className={classes.pageContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.profilePicture}>
            <div>
              <img src={user.profilePicture} alt="error" />
            </div>
            <div
              className={classes.changePicture}
              onClick={() => handleClickAccount()}
            >
              <p>Change Picture</p>
            </div>
          </div>
          <div className={classes.deleteButton1}>
            <div
              className={classes.deleteAccount}
              onClick={() => handleClickDelete()}
            >
              <p>Delete Account</p>
            </div>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.username}>
            <div className={classes.usernameHeader}>
              <span>User Name: </span>
              <p
                className={classes.LinkButton}
                onClick={() => handleClickUsername()}
              >
                Change
              </p>
            </div>
            <div>{user.userName}</div>
          </div>
          <div className={classes.email}>
            <div className={classes.emailHeader}>
              <span>Email: </span>
              <p className={classes.LinkButton} onClick={handleClickEmail}>
                Change
              </p>
            </div>
            <div>{user.userEmail}</div>
          </div>
          {user.userRole === 1 ? (
            ""
          ) : (
            <div className={classes.balance}>
              <div className={classes.balanceHeader}>
                <span>Balance: </span>
                <Link to={"/topup"}>
                  <div className={classes.topUpButton}>Top Up +</div>
                </Link>
              </div>
              <div>Rp. {user.balance}</div>
            </div>
          )}

          <div className={classes.buttons}>
            <div
              className={classes.changePassword}
              onClick={() => handleClickPassword()}
            >
              <img src={lockIcon} alt="ERROR" />
              <p>Change Password</p>
            </div>

            <div className={classes.deleteButton2}>
              <div className={classes.deleteAccount}>
                <p>Delete Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {UsernameVisible && (
        <ChangeUsernamePopUp
          handleClose={hideUsername}
          refreshUserData={refreshUserData}
        />
      )}
      {PasswordVisible && (
        <ChangePasswordPopUp
          handleClose={hidePassword}
          refreshUserData={refreshUserData}
        />
      )}
      {DeleteVisible && (
        <DeleteAccountPopUp
          handleClose={hideDelete}
          refreshUserData={() => dispatch(logoff())}
        />
      )}
      {EmailVisible && (
        <ChangeEmailPopUp
          handleClose={hideEmail}
          refreshUserData={refreshUserData}
        />
      )}
      {AccountVisible && (
        <ChangeProfilePicture
          handleClose={hideAccount}
          refreshUserData={refreshUserData}
        />
      )}
    </Fragment>
  );
};

export default ProfilePage;
