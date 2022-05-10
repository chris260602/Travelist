import React from 'react';
import classes from "./UserPage.module.css";


const changeUsername = ({handleClose})=>{

    
    return(
        <div className={classes.popUpBackground}>
            <div className={classes.popUpContainer}>
                <div className={classes.popUpTitle}>
                    <div className={classes.Title}>
                        <p>Change Username</p>
                    </div>
                    <div className={classes.Close}>
                        <p onClick={handleClose}>&times;</p>
                    </div>
                </div>
                <div className={classes.popUpContent}>
                    <div className={classes.contentInfo}>
                        You can change your name only once
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.inputBox}>
                            <input type="text" placeholder='User'/>
                        </div>
                        <a href="#" onClick={handleClose}>
                            <div className={classes.inputButton}>
                                Save changes
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default changeUsername