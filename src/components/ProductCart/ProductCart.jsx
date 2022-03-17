import React from 'react';
import classes from './ProductCart.module.css'
import CartData from './CartData';
import TrashIcon from '../../assets/img/trash.svg'

const ProductCart = ()=>{
    const listItems = CartData.map((item) =>
        <div className={classes.cart} key={item.id}>
            <div className={classes.cart_img}>
                <img src={item.img} alt="error"/>
            </div>
            <div className={classes.cartDetail}>
                <div className={classes.cartHeader}>
                    <div className={classes.productInfo}>
                        {item.productName}
                        <p className={classes.cartPrice}><span>{item.currency} </span>{item.price}</p>
                    </div>
                    <div className={classes.cartQuantity}>
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
                </div>

                <div className={classes.removeCart}>
                    <img src={TrashIcon} alt="error" />
                </div>
            </div>
            
        </div>
    )

    return(
        <div className={classes.product_list}>
            {listItems}
        </div>
    )
}

export default ProductCart;