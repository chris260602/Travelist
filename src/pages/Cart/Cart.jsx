import React, { Fragment } from 'react';
import classes from './Cart.module.css';
import ProductCart from '../../components/ProductCart/ProductCart';

const Cart = () =>{
    return(
        <Fragment>
            <div className={classes.container}>
                <div className={classes.cartTitle}>
                    <p>
                        Cart
                    </p>
                </div>
                <div className={classes.content}>
                    <div className={classes.cartProduct}>
                        <ProductCart/>
                    </div>
                    <div className={classes.cartSummary}>
                        <div className={classes.summaryInfo}>
                            <p className={classes.summaryTitle}> Summary</p>
                            <p className={classes.totalItems}> <span>Total Items: </span>2</p>
                            <p className={classes.totalPrice}><span>Total Price: </span>Rp 250000</p>
                        </div>
                        <div className={classes.buyNowButton}>
                            <p>Buy Now</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )

}

export default Cart;