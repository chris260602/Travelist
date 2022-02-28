import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

const Register = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [usernameValid, setUsernameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [emailTaken, setEmailTaken] = useState(false);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;
  const navigate = useNavigate();
  if (isLoggedIn === true) {
    navigate("/");
  }
  useEffect(() => {
    setUsernameValid(true);
    setEmailValid(true);
    setPasswordValid(true);
    setConfirmPasswordValid(true);
    document.title = "Register | Travelist";
  }, []);
  const clearInput = () => {
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    confirmPassword.current.value = "";
  };
  const isInputValid = () => {
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let isValid = true;
    if (username.current.value.length < 6) {
      isValid = false;
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
    }
    if (!validEmail.test(email.current.value)) {
      isValid = false;
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
    if (password.current.value.length < 6) {
      isValid = false;
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
    if (confirmPassword.current.value !== password.current.value) {
      isValid = false;
      setConfirmPasswordValid(false);
    } else {
      setConfirmPasswordValid(true);
    }
    return isValid;
  };
  const registerHandler = async (e) => {
    e.preventDefault();
    setBtnClick(true);
    if (isInputValid()) {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/`, {
          userrole: 0,
          username: username.current.value,
          useremail: email.current.value,
          password: password.current.value,
          balance: 0,
          profilepicture: `${process.env.REACT_APP_BACKEND_URL}/public/img/defaultprofile.svg`,
        });
        clearInput();
        navigate("/login");
      } catch (e) {
        setEmailValid(false);
        setEmailTaken(true);
      }
    }
    setBtnClick(false);
  };

  return (
    <Fragment>
      <SimpleHeader />
      <div className={classes.formContainer}>
        <form className={classes.registerForm} onSubmit={registerHandler}>
          <h2 className={classes.registerTitle}>Register</h2>
          <div className={`${classes.formChild}`}>
            <label htmlFor="username">
              Username:{" "}
              {!usernameValid ? (
                <span className={classes.errorInput}>6 or more characters</span>
              ) : (
                ""
              )}
            </label>
            <input
              id="username"
              type={"text"}
              placeholder="Min 6 Characters"
              required
              ref={username}
            />
          </div>
          <div className={`${classes.formChild}`}>
            <label htmlFor="email">
              Email:{" "}
              {!emailValid ? (
                <span className={classes.errorInput}>
                  {emailTaken
                    ? "Already have a user with this email"
                    : "Invalid Email"}
                </span>
              ) : (
                ""
              )}
            </label>
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

          <div className={`${classes.formChild}`}>
            <label htmlFor="confirmPassword">
              Confirm Password:{" "}
              {!confirmPasswordValid ? (
                <span className={classes.errorInput}>
                  Must be same as password!
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              id="confirmPassword"
              type={"password"}
              placeholder="re-type your password"
              required
              ref={confirmPassword}
            />
          </div>
          {btnClick ? (
            <Loader />
          ) : (
            <button className={classes.submitRegister}>Register</button>
          )}
          <div className={classes.loginAccountBtnContainer}>
            <Link to={"/login"} className={classes.loginAccountBtn}>
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
      <div className={classes.registerFooter}>
        <p>Created by Christoper Lim, Martin & Reihan.</p>
        <p>© 2022 | Travelist</p>
      </div>
    </Fragment>
  );
};
export default Register;
