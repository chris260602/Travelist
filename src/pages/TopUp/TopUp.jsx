import React, { Fragment, useEffect, useState } from "react";
import classes from "./TopUp.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SimpleButton from "../../components/UI/SimpleButton/SimpleButton";
import { useSelector } from "react-redux";
import TopUpCol from "./TopUpCol";
import DataIsEmpty from "../../components/DataIsEmpty/DataIsEmpty";
//DUMMY_DATA

const TopUpPage = () => {
  useEffect(() => {
    document.title = "TopUp | Travelist";
  }, []);
  const [userBalance, setUserBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState("0");
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const user = useSelector((state) => state.user);
  const handleInput = (event) => {
    if (event.nativeEvent.data === null && topUpAmount.length <= 1) {
      setTopUpAmount("0");
    } else {
      if (topUpAmount === "0") {
        setTopUpAmount(event.target.value[1]);
      } else if (
        event.target.value.length === 0 ||
        event.target.value === "0"
      ) {
        setTopUpAmount("0");
      } else {
        setTopUpAmount(event.target.value);
      }
    }
  };

  const TopUpTable = (
    <div className={classes.TopUpTableContainer}>
      <div className={classes.TopUpTableHeader}>
        <div className={classes.TopUpHeader1}>
          <p>Account</p>
        </div>
        <div className={classes.TopUpHeader2}>
          <p>Amount Requested</p>
        </div>
        <div className={classes.TopUpHeader3}>
          <p>Action</p>
        </div>
      </div>
      {/* {<DataIsEmpty />} */}
      <TopUpCol data={{ name: "user1", id: "1", price: "10000" }} />
      <TopUpCol data={{ name: "user2", id: "1", price: "10000" }} />
      <TopUpCol data={{ name: "user3", id: "1", price: "10000" }} />
      <TopUpCol data={{ name: "user4", id: "1", price: "10000" }} />
      <TopUpCol data={{ name: "user5", id: "1", price: "10000" }} />
    </div>
  );
  const TopUpAdmin = (
    <div className={classes.Container}>
      <div className={classes.TopUpAdminMainContainer}>
        <div className={classes.TopUpTitle}>
          <p>Top Up</p>
        </div>
        {TopUpTable}
      </div>
    </div>
  );

  const TopUpCustomer = (
    <div className={classes.Container}>
      <div className={classes.TopUpMainContainer}>
        <div>
          <div className={classes.TopUpTitle}>
            <p>Top Up</p>
          </div>
          <div className={classes.CurrentBalance}>
            <p>
              Current Balances:{" "}
              <span className={classes.balance}>Rp {userBalance}</span>
            </p>
          </div>
        </div>

        <div className={classes.TopUpContainer}>
          <div className={classes.InputTitle}>
            <label>Top Up Amount:</label>
          </div>
          <div className={classes.InputContainer}>
            <span className={classes.CurrencyCode}>Rp.</span>
            <input
              className={`${classes.inputTopUp} ${classes.Input}`}
              type="number"
              min={0}
              name=""
              id=""
              value={topUpAmount}
              onChange={handleInput}
              onKeyDown={(e) =>
                symbolsArr.includes(e.key) && e.preventDefault()
              }
            />
          </div>

          <div className={classes.InstantButtonContainer}>
            <div
              className={`${classes.autoButton} ${classes.InstantButton}`}
              onClick={() => setTopUpAmount("50000")}
            >
              <p>50.000</p>
            </div>
            <div
              className={`${classes.autoButton} ${classes.InstantButton}`}
              onClick={() => setTopUpAmount("100000")}
            >
              <p>100.000</p>
            </div>
            <div
              className={`${classes.autoButton} ${classes.InstantButton}`}
              onClick={() => setTopUpAmount("200000")}
            >
              <p>200.000</p>
            </div>
            <div
              className={`${classes.autoButton} ${classes.InstantButton}`}
              onClick={() => setTopUpAmount("500000")}
            >
              <p>500.000</p>
            </div>
          </div>

          <div className={classes.TopUpButtonContainer}>
            <SimpleButton size="20" onClick={console.log("tes")}>
              Top Up
            </SimpleButton>
          </div>
        </div>
      </div>
      <div className={classes.TopUpNoteContainer}>
        <div className={classes.TopUpNote}>
          <h2>How to Top Up in Travelist</h2>
          <ul className={classes.TopUpNoteCard}>
            <li>
              <p>
                Select Top Up Amount by manually inputting the desired amount or
                pressing the buttons provided.
              </p>
            </li>
            <li>
              <p>Press the Top Up Button.</p>
            </li>
            <li>
              <p>Send the total amount to Travelist Virtual Bank Number.</p>
            </li>
            <li>
              <p>
                Send the transaction proof to{" "}
                <a
                  href={"mailto: travelist@gmail.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  travelist@gmail.com{" "}
                </a>
                <span className={classes.bold}>
                  by attaching the screenshot proof and your email address
                </span>
                .
              </p>
            </li>
          </ul>
          <p className={classes.topUpDisclaimer}>
            The transaction could take between 5 - 10 minutes for your payment
            verification.{" "}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Header />
      {user.userRole === 1 ? TopUpAdmin : TopUpCustomer}
      <Footer />
    </Fragment>
  );
};

export default TopUpPage;
