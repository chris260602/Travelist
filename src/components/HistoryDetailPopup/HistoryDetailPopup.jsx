import React, {useState} from 'react';
import classes from './HistoryDetailPopup.module.css'


const HistoryDetailPopup = ({handleClose, Details}) =>{
    
    return(
        <div className= {classes.DetailBackground}>
            <div className={classes.DetailContainer}>
                <div className={classes.DetailTitle}>
                    <div className={classes.Title}>
                        <h1>Transaction Detail</h1>
                    </div>
                    <div className={classes.Close}>
                        <p onClick={handleClose}>&times;</p>
                    </div>
                </div>
                
                <div className={classes.DetailInformation}>
                    <div className={classes.leftContainer}>
                        <div className={classes.detailHeader}>
                            <p className={classes.status}>
                                <span> Status: {
                                (()=>{
                                    if (Details.status === false){
                                        return(
                                            <span className={classes.notDelivered}>
                                                On Process
                                            </span>
                                        )
                                    }else if(Details.status === true){
                                        return(
                                            <span className={classes.delivered}>
                                                Delivered
                                            </span>
                                        )
                                    }
                                })()
                                }
                                </span>
                            </p>
                            <p className={classes.date}>Purchase Date: {Details.date}</p>
                        </div>
                        <div className={classes.paymentDetail}>
                                <p className={classes.paymentHeader}>Payment Details</p>
                                <p className={classes.paymentMethod}>Payment Method: {Details.PaymentType}</p>
                                <p className={classes.totalPrice}>Total Price ({Details.quantity} Item): {Details.currency} {Details.totalPrice}</p>
                        </div>
                    </div>
                    <div className={classes.rightContainer}>
                        <div className={classes.ProductDetail}>
                            <h1>Product Detail</h1>
                            <div className={classes.card} key={Details.id}>
                                <div className={classes.card_img}>
                                    <img src={Details.img} alt="error"/>
                                </div>
                                <div className={classes.card_header}>
                                    {Details.productName}
                                    <p className={classes.card_price}><span>{Details.currency}</span>{Details.price}</p>
                                    <p>{Details.sold} <span> Sold</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryDetailPopup