import React from 'react';
import classes from './CompletedProcessProduct.module.css'
import CompletedProcessProduct_data from './CompletedProcessProduct_data';

const OnProcessProduct = () =>{
    console.log(CompletedProcessProduct_data);
    const CompletedProcessProductList = CompletedProcessProduct_data.map((item) =>
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
                <a href="">
                    <div className={classes.status}>
                        Buy Again
                    </div>    
                </a>
            </div>
        </div>
    )

    return(
        <div className={classes.CompletedProcessProduct_list}>
            {CompletedProcessProductList}
        </div>
    )
}

export default OnProcessProduct;