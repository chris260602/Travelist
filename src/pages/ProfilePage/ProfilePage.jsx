import React, { Fragment, useState } from "react";
import classes from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import lockIcon from "../../assets/img/lockIcon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileConfirmationCard from "./components/ProfileConfirmationCard";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [prompt, setPrompt] = useState(null);
  console.log(user);
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
            <div className={classes.changePicture}>
              <a href="#1">Change Picture</a>
            </div>
          </div>
          <div className={classes.deleteButton1}>
            <div
              className={classes.deleteAccount}
              onClick={() =>
                setPrompt({
                  active: true,
                  title: "Delete Account",
                  desc: `Are you sure you want to delete ${user.userName} ?`,
                  id: user._id,
                  warning: "Your account will be permanently removed.",
                })
              }
            >
              <p>Delete Account</p>
            </div>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.username}>
            <div className={classes.usernameHeader}>
              <span>User Name: </span>
              <a href="#3">Change</a>
            </div>
            <div>{user.userName}</div>
          </div>
          <div className={classes.email}>
            <div className={classes.emailHeader}>
              <span>Email: </span>
              <a href="#4">Change</a>
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
            <a href="#5">
              <div className={classes.changePassword}>
                <img src={lockIcon} alt="ERROR" />
                <p>Change Password</p>
              </div>
            </a>

            <div className={classes.deleteButton2}>
              <a href="#2">
                <div className={classes.deleteAccount}>Delete Account</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
