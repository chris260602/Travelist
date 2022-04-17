import { Link } from "react-router-dom";
import classes from "./EmailVerification.module.css";
const EmailVerification = () => {
  return (
    <div className={classes.container}>
      <p>Account Verification has been sent to your email.</p>
      <p>Please go to your email account to verify your account</p>
      <div className={classes.linkContainer}>
        <Link to={"/login"}>Go back to login page</Link>
      </div>
    </div>
  );
};

export default EmailVerification;
