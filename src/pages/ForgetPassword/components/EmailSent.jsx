import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./EmailSent.module.css";
const EmailVerification = () => {
  document.body.style.overflow = "hidden";
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backDrop}></div>
      <div className={classes.container}>
        <p>Password reset link has been sent to your email.</p>
        <p>Please go to your email account to reset your password</p>
        <div className={classes.linkContainer}>
          <Link to={"/login"}>Go back to login page</Link>
        </div>
      </div>
    </Fragment>,
    document.getElementById("loader")
  );
};

export default EmailVerification;
