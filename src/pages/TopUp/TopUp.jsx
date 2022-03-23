import React, { Fragment } from "react";
import classes from './TopUp.module.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const TopUpPage = () => {
  return (
    <Fragment>
        <Header />
        <div className={classes.Container}>
            <div>
                <div className={classes.TopUpTitle}>
                    <p>
                        Top Up
                    </p>
                </div>
                <div className={classes.CurrentBalance}>
                    <p>Current Balances: <span className={classes.balance}>Rp 50.000</span></p>
                </div>
            </div>
            <div>
                <form action="">
                    <div className={classes.InputTitle}>
                        <label>Top Up Amount:</label>
                    </div>
                    <div className={classes.InputContainer}>
                        <span className={classes.CurrencyCode}>Rp.</span>
                        <input type="text" className={classes.Input} />
                    </div>

                    <div className={classes.InstantButtonContainer}>
                        <div className={classes.InstantButton}>25.000</div>
                        <div className={classes.InstantButton}>50.000</div>
                        <div className={classes.InstantButton}>100.000</div>
                        <div className={classes.InstantButton}>250.000</div>
                        <div className={classes.InstantButton}>500.000</div>
                    </div>
    
                    <div className={classes.TopUpButtonContainer}>
                        <button type="submit" className={classes.TopUpButton}>Top Up</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </Fragment>
  );
};

export default TopUpPage;