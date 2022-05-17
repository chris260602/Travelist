import { useState } from "react";
import { Link } from "react-router-dom";
import HistoryDetailPopup from "../HistoryDetailPopup/HistoryDetailPopup";
import classes from "./HistoryProductContainer.module.css";

const HistoryProductCard = (props) => {
  const { data } = props;
  const [Visible, setVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const hanldeClick = (selectedData) => {
    setSelectedTransaction(selectedData);
    setVisible(true);
  };
  const hideDetail = () => {
    setVisible(false);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.Container_Content}>
        <div className={classes.Container_img}>
          <img src={data.products[0].productID.mainPicture} alt="error" />
        </div>
        <div className={classes.Container_header}>
          <div className={classes.detail_header}>
            {data.products[0].productID.productName}
            <p className={classes.header_price}>
              {data.products[0].quantity} * Rp.{" "}
              {data.products[0].productID.productPrice}
            </p>
            <p className={classes.header_date}>
              {new Date(data.purchaseDate).toLocaleDateString()}
            </p>
          </div>

          <div className={classes.seeDetail}>
            <p onClick={() => hanldeClick(data)}>See More</p>
          </div>

          <div className={classes.total_price}>
            <p>Total Price: Rp. {data.totalPrice}</p>
          </div>
        </div>
      </div>
      <div className={classes.Container_Status}>
        {(() => {
          if (data.status === 1) {
            return (
              <div className={classes.statusCompleted}>
                <Link to={`/productdetail/${data.products[0].productID._id}`}>
                  Buy Again
                </Link>
              </div>
            );
          } else if (data.status === 0) {
            return <div className={classes.statusOnProcess}>On Process</div>;
          }
        })()}
      </div>
      {Visible && (
        <HistoryDetailPopup
          Details={selectedTransaction}
          handleClose={hideDetail}
        />
      )}
    </div>
  );
};
export default HistoryProductCard;
