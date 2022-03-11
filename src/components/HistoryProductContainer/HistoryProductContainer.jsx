import React from 'react';
import classes from './HistoryProductContainer.module.css'
import HistoryProductContainer_data from './HistoryProductContainer_data';

const HistoryProductContainer = () =>{
    console.log(HistoryProductContainer_data);
    const HistoryProductContainerList = HistoryProductContainer_data.map((item) =>
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
                {
                    (()=>{
                        if (item.status == 1){
                            return(
                                <a href="">
                                    <div className={classes.statusCompleted}>
                                        Buy Again
                                    </div>    
                                </a>
                            )
                        }else if(item.status == 0){
                            return(
                                <div className={classes.statusOnProcess}>
                                    On Process
                                </div>
                            )
                        }
                    })()
                }
            </div>
            
        </div>
    )

    return(
        <div className={classes.HistoryProductContainer_list}>
            {HistoryProductContainerList}
        </div>
    )
}

export default HistoryProductContainer;