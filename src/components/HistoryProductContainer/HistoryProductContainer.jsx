import React, {useState} from 'react';
import classes from './HistoryProductContainer.module.css'
import HistoryProductContainer_data from './HistoryProductContainer_data'
import HistoryDetailPopup from '../HistoryDetailPopup/HistoryDetailPopup';

const HistoryProductContainer = () =>{

    const [Visible, setVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState({});
    const hanldeClick = (selectedData) => {
        setSelectedTransaction(selectedData);
        setVisible(true);
    };

    const hideDetail = () => {
        setVisible(false);
    };

    console.log(HistoryProductContainer_data);
    const HistoryProductContainerList = HistoryProductContainer_data.map((item) =>
        <div className={classes.Container} key={item.TransID}>
            <div className={classes.Container_Content}>
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
                        <a href="#" onClick={() => hanldeClick(item)}>
                            See More
                        </a>
                    </div>
                    
                    <div className={classes.total_price}>
                        <p>Total Price: {item.currency} {item.totalPrice}</p>
                    </div>
                </div>
            </div>
            <div className={classes.Container_Status}>
                {
                    (()=>{
                        if (item.status === true){
                            return(
                                <a href="">
                                    <div className={classes.statusCompleted}>
                                        Buy Again
                                    </div>    
                                </a>
                            )
                        }else if(item.status === false){
                            return(
                                <div className={classes.statusOnProcess}>
                                    On Process
                                </div>
                            )
                        }
                    })()
                }
            </div>
            {Visible && <HistoryDetailPopup Details={selectedTransaction} handleClose={hideDetail} />}
        </div>
    )

    return(
        <div className={classes.HistoryProductContainer_list}>
            {HistoryProductContainerList}
        </div>
    )
}

export default HistoryProductContainer;