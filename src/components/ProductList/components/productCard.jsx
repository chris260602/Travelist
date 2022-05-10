import React, { Fragment} from "react";
import classes from "./productCard.module.css";
import { Link } from "react-router-dom";
import Wishlist from "../../WishList/Wishlist";

const ProductCard = (props) => {
    const { item } = props;
    return (
        <Fragment>
             <div className={classes.cardContainer}>
                <Link to={"/productdetail"} className={classes.card} key={item.id}>
                <div className={classes.card_img}>
                    <img src={item.img} alt="error" />
                </div>
                <div className={classes.card_header}>
                    <div className={classes.info}>
                        <h4>{item.productName}</h4>
                        <p className={classes.card_price}>
                        <span>{item.currency}</span>
                        {item.price}
                        </p>
                        <div className={classes.bottomContainer}>
                            <p>
                                {item.sold} <span> Sold</span>
                            </p>
                        </div>
                    </div>

                    <div className={classes.wishListIcon}>
                        <Wishlist/>
                    </div>
                </div>
                </Link>
            </div>
        </Fragment>
    );
}

export default ProductCard