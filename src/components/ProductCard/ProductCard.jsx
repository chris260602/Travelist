import React from 'react';
import productCard_data from './productCard_data';
import classes from './productCard.module.css'

const ProductCard = () =>{
    console.log(productCard_data);
    const listItems = productCard_data.map((item) =>
        <div className={classes.card} key={item.id}>
            <div className={classes.card_img}>
                <img src={item.img} alt="error"/>
            </div>
            <div className={classes.card_header}>
                {item.productName}
                <p className={classes.card_price}><span>{item.currency}</span>{item.price}</p>
                <p>{item.sold} <span> Sold</span></p>
            </div>
        </div>
    )

    return(
        <div className={classes.product_list}>
            {listItems}
        </div>
    )
}

export default ProductCard;