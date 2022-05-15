import React, { Fragment, useEffect, useState } from "react";
import classes from "./productCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "../../assets/img/editIcon.svg";
import deleteIcon from "../../assets/img/deleteIcon.svg";
import DeleteProductCard from "./components/DeleteProductCard";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const [deletePromt, setDeletePromt] = useState({
    active: false,
    productID: null,
    productName: null,
  });
  useEffect(() => {
    if (deletePromt.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [deletePromt]);
  const { item } = props;
  return (
    <Fragment>
      {deletePromt.active ? (
        <DeleteProductCard
          product={deletePromt}
          cancelModalHandler={setDeletePromt}
        />
      ) : (
        ""
      )}
      <div className={classes.cardContainer}>
        <Link
          to={`/productdetail/${item._id}`}
          className={classes.card}
          key={item._id}
        >
          <div className={classes.card_img}>
            <img src={item.mainPicture} alt="error" />
          </div>
          <div className={classes.card_header}>
            <h4>{item.productName}</h4>
            <p className={classes.card_price}>
              <span>Rp. </span>
              {item.productPrice}
            </p>
            <div className={classes.bottomContainer}>
              <p>
                {item.productSold} <span> Sold</span>
              </p>
            </div>
          </div>
        </Link>
        {props.isAdmin ? (
          <div className={classes.bottomButtonContainer}>
            <div
              className={classes.editButton}
              onClick={() => {
                navigate(`/updateproduct/${item._id}`);
              }}
            >
              <img src={editIcon} alt="edit" />
            </div>
            <div
              className={classes.deleteButton}
              onClick={() =>
                setDeletePromt({
                  active: true,
                  productID: item._id,
                  productName: item.productName,
                })
              }
            >
              <img src={deleteIcon} alt="delete" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default ProductCard;
