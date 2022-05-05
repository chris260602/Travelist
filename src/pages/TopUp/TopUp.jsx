import React, { Fragment, useEffect, useState } from "react";
import classes from "./TopUp.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SimpleButton from "../../components/UI/SimpleButton/SimpleButton";

const TopUpPage = () => {
  useEffect(() => {
    document.title = "TopUp | Travelist";
  }, []);
  const [userBalance, setUserBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState("0");
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
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
  return (
    <Fragment>
      <Header />
      <div className={classes.Container}>
        <div>
          <div className={classes.TopUpTitle}>
            <p>Top Up</p>
          </div>
          <div className={classes.CurrentBalance}>
            <p>
              Current Balances:{" "}
              <span className={classes.balance}>Rp 50.000</span>
            </p>
          </div>
        </div>
        <div>
          <form action="">
            <div className={classes.InputTitle}>
              <label>Top Up Amount:</label>
            </div>
            <div className={classes.InputContainer}>
              <span className={classes.CurrencyCode}>Rp.</span>
              <input
                className={`${classes.inputTopUp} ${classes.input}`}
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
              <SimpleButton size="20">Top Up</SimpleButton>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TopUpPage;
//** classes.TopUpButton **/
// {
//   /* return (
//     <Fragment>
//       <Header />
//       <div className={classes.topUpContainer}>
//         <h1>Top Up</h1>
//         <h3>Current Balance {userBalance}</h3>
//         <div className="topUpBox">
//           <h3>Top Up amount</h3>
//           <div>
//             <p>Rp.</p>
//             <input
//               className={classes.inputTopUp}
//               type="number"
//               min={0}
//               name=""
//               id=""
//               value={topUpAmount}
//               onChange={handleInput}
//               onKeyDown={(e) =>
//                 symbolsArr.includes(e.key) && e.preventDefault()
//               }
//             />
//           </div>

//         </div>
//       </div>
//     </Fragment>
//   ); */
// }
