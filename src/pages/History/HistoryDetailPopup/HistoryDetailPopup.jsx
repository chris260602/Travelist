import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./HistoryDetailPopup.module.css";
import ReactDOM from "react-dom";

const HistoryDetailPopup = ({ handleClose, Details }) => {
  console.log(Details);
  return ReactDOM.createPortal(
    <Fragment>
    <div className={classes.DetailBackground}>
      <div className={classes.DetailContainer}>
        <div className={classes.DetailTitle}>
          <div className={classes.Title}>
            <p>Transaction Detail</p>
          </div>
          <div className={classes.Close}>
            <p onClick={handleClose}>&times;</p>
          </div>
        </div>

        <div className={classes.DetailInformation}>
          <div className={classes.leftContainer}>
            <div className={classes.detailHeader}>
              <p className={classes.status}>
                <span>
                  {" "}
                  Status:{" "}
                  {(() => {
                    if (Details.status === 0) {
                      return (
                        <span className={classes.notDelivered}>On Process</span>
                      );
                    } else if (Details.status === 1) {
                      return (
                        <span className={classes.delivered}>Delivered</span>
                      );
                    }
                  })()}
                </span>
              </p>
              <p className={classes.date}>
                Purchase Date:{" "}
                {new Date(Details.purchaseDate).toLocaleDateString()}
              </p>
            </div>
            <div className={classes.paymentDetail}>
              <p className={classes.paymentHeader}>Payment Details</p>
              <p className={classes.paymentMethod}>
                Payment Method: TravelBucks
              </p>
              <p className={classes.totalPrice}>
                Total Price ({Details.totalItem} Item): Rp. {Details.totalPrice}
              </p>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <p>Product Detail</p>
            <div className={classes.ProductDetail}>
              {Details.products.map((item) => (
                <Link
                  to={`/productdetail/${item.productID._id}`}
                  className={classes.card}
                  key={item.productID._id}
                >
                  <div className={classes.card_img}>
                    <img src={item.productID.mainPicture} alt="error" />
                  </div>
                  <div className={classes.card_header}>
                    {item.productID.productName}
                    <p className={classes.card_price}>
                      <span>Rp. </span>
                      {item.productID.productPrice}
                    </p>
                    <p>
                      {item.productID.productSold} <span> Sold</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>,
    document.getElementById("card")
  );
};

export default HistoryDetailPopup;
