import React from 'react';
import classes from './OnProcessProduct.module.css'
import OnProcessProduct_data from './OnProcessProduct_data';

const OnProcessProduct = () =>{
    console.log(OnProcessProduct_data);
    const OnProcessProductList = OnProcessProduct_data.map((item) =>
        <div className={classes.Container} key={item.id}>
            <div className={classes.Container_img}>
                <img src={item.img} alt="error"/>
            </div>
            <div className={classes.Container_header}>
                <div className={classes.detail_header}>
                    {item.productName}
                    <p className={classes.header_price}>{item.quantity} * {item.currency} {item.price}</p>
                    <p className={classes.header_date}>{item.date}</p>
                </div>

                <div className={classes.seeDetail}>
                    <p>See More</p>
                </div>

                <div className={classes.total_price}>
                    <p>Total Price: {item.currency} {item.totalPrice}</p>
                </div>
            </div>
            <div className={classes.Container_Status}>
                <div className={classes.status}>
                    On Process
                </div>
            </div>
        </div>
    )

    return(
        <div className={classes.OnProcessProduct_list}>
            {OnProcessProductList}
        </div>
    )
}

export default OnProcessProduct;