import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./ForgetPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";
import EmailSent from "./components/EmailSent";

const ForgetPassword = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const password = useRef();
  const email = useRef();
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;
  const navigate = useNavigate();
  if (isLoggedIn === true) {
    navigate("/");
  }
  useEffect(() => {
    document.title = "Forget Password | Travelist";
  }, []);
  const clearInput = () => {
    email.current.value = "";
    password.current.value = "";
  };

  const forgetPasswordHandler = async (e) => {
    e.preventDefault();
    setBtnClick(true);
    if (password.current.value.length >= 6) {
      setPasswordValid(true);
      try {
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/forgetpassword`,
          {
            userEmail: email.current.value,
            userPassword: password.current.value,
          }
        );
      } catch (e) {
        console.log("Something went Wrong");
      }
      clearInput();
      setIsSent(true);
    } else {
      setPasswordValid(false);
    }

    setBtnClick(false);
  };
  return (
    <Fragment>
      {isSent ? <EmailSent /> : ""}
      <SimpleHeader />
      <div className={classes.formContainer}>
        <form
          className={classes.forgetPasswordForm}
          onSubmit={forgetPasswordHandler}
        >
          <h2 className={classes.forgetPasswordTitle}>Forget Password</h2>

          <div className={`${classes.formChild}`}>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type={"email"}
              placeholder="example@gmail.com"
              required
              ref={email}
            />
          </div>
          <div className={`${classes.formChild}`}>
            <label htmlFor="password">
              Password:{" "}
              {!passwordValid ? (
                <span className={classes.errorInput}>
                  6 or more characters!
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              id="password"
              type={"password"}
              placeholder="Min 6 Characters"
              required
              ref={password}
            />
          </div>
          {btnClick ? (
            <Loader />
          ) : (
            <button className={classes.submitForgetPassword}>
              Send password reset email
            </button>
          )}
          <div className={classes.loginAccountBtnContainer}>
            <Link to={"/register"} className={classes.loginAccountBtn}>
              Don't have an account yet?
            </Link>
          </div>
        </form>
      </div>
      <div className={classes.forgetPasswordFooter}>
        <p>Created by Christoper Lim, Martin & Reihan.</p>
        <p>© 2022 | Travelist</p>
      </div>
    </Fragment>
  );
};
export default ForgetPassword;
