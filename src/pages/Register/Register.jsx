import React, { Fragment } from "react";
import classes from "./Register.module.css"
import logo from "../../assets/company_name/Travelist.svg";
import { Link } from "react-router-dom";

const Register=()=>{
    return(
        <Fragment>
        <div className={classes.headerContainer}>
          <Link to={"/"} className={classes.logoContainer}>
            <img src={logo} alt="Travelist" />
          </Link>
        </div>
        <div className={classes.formContainer}>
          <form className={classes.registerForm}>
            <h2 className={classes.registerTitle}>Register</h2>
            <div className={`${classes.formChild}`}>
              <label htmlFor="username">Username:</label>
              <input id="username" type={"text"} placeholder="example" />
            </div>
            <div className={`${classes.formChild}`}>
              <label htmlFor="email">Email:</label>
              <input id="email" type={"email"} placeholder="example@gmail.com" />
            </div>
            <div className={`${classes.formChild}`}>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type={"password"}
                placeholder="example123"
              />
            </div>

            <div className={`${classes.formChild}`}>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                id="confirmPassword"
                type={"password"}
                placeholder="example123"
              />
            </div>
            <button className={classes.submitRegister}>Register</button>
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
    )
}
export default Register;