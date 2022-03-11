import React, {Fragment} from 'react'
import classes from './History.module.css'
import HistoryProductContainer from '../../components/HistoryProductContainer/HistoryProductContainer'


const History =()=>{

    return(
        <Fragment>
            <div className = {classes.Container} >
                <div>
                    <div className= {classes.ContainerHeader}>
                        <h1>History</h1>
                    </div>
                    <HistoryProductContainer/>
                </div>
                
            </div>
        </Fragment>
    )
}

export default History