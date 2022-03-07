import React from 'react'
import loveIcon from '../../assets/img/love.svg'
import classes from './Wishlist.module.css'

const Wishlist = () =>{
    return(
        <div className={classes.wishlist}>
            <div className={classes.wishlistIcon}>
                <img src={loveIcon} className={classes.loveIcon} alt="error" />
            </div>
        </div>
    )
}

export default Wishlist;