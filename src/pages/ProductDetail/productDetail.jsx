import React, { Fragment } from 'react'
import classes from './productDetail.module.css'
import Wishlist from '../../components/WishList/Wishlist' 

const ProductDetail = ()=>{

    return(
        <Fragment>
       <div className={classes.rightContainer}>
           <div className={classes.firstContainer}>
                <div className={classes.productImage}>
                        <div className={classes.mainImage}>
                            <img src="https://i.ibb.co/VD8nPjK/Travelist.png" className={classes.imageSection1} alt="error" />
                        </div>
                        <div className={classes.imageChoice}>
                            <img src="https://i.ibb.co/VD8nPjK/Travelist.png" className={classes.imageSection2} alt="error" />
                            <img src="https://i.ibb.co/VD8nPjK/Travelist.png" className={classes.imageSection2} alt="error" />
                            <img src="https://i.ibb.co/VD8nPjK/Travelist.png" className={classes.imageSection2} alt="error" />
                        </div>
                </div>
                <div className={classes.productInfo}>
                        <div className={classes.section1}>
                            <div className={classes.productTitle}>
                                <p className={classes.productName}> 
                                    Survival Bag
                                </p>
                                <div className={classes.wishlistInProductInfo}>
                                    <Wishlist/>
                                </div>
                            </div>
                            <p className={classes.productSold}>
                                120 sold
                            </p>
                        </div>
                        <div className={classes.section2}>
                            <p className={classes.productPrice}>Rp 200000</p>
                        </div>
                        <div className={classes.section3}>
                            <p className={classes.productDescription}>
                                Description
                            </p>
                            <p className={classes.productCategory}>
                                category: Bag
                            </p>
                            <p className={classes.productContentTitle}>
                                content:
                            </p>
                            <p className={classes.productContent}>
                                lorem ipsum
                            </p>

                        </div>
                </div>
           </div>
          
           <div className={classes.productCart}>
                <div className={classes.cartBox}>
                    <div className={classes.amountTitle}>
                        Amount
                        
                    </div>
                    <div className={classes.amountCart}> 
                        <div className={classes.changeAmount}>
                            <div className={classes.changeAmountIcon}>
                                <img src="https://i.ibb.co/31VR1Vq/carbon-subtract-alt.png" alt="error" />
                            </div>
                            <div className={classes.amountText}>
                                <p>1</p>
                            </div>
                            <div className={classes.changeAmountIcon}>
                                <img src="https://i.ibb.co/VVVXtH4/carbon-add-alt.png" alt="error" />
                            </div>

                        </div>
                        <div className={classes.productStock}>
                            <p>Stocks: <span className={classes.stockAmount}>100</span></p>
                        </div>
                        <div className={classes.addCartButton}>
                            Add to Cart
                        </div>
                    </div>
                    <div className={classes.wishlistInProductCart}>
                        <Wishlist/>
                        <p>Wishlist</p>
                    </div>
                </div>
           </div>
       </div> 
       
       </Fragment>
    )
}

export default ProductDetail