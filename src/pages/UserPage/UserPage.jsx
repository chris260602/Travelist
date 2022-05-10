import React, { Fragment, useState} from "react";
import classes from "./UserPage.module.css";
import ChangeUsernamePopUp from "./ChangeUsername";
import ChangePasswordPopUp from "./ChangePassword";
import DeleteAccountPopUp from "./DeleteAccount";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

const user=
        {
        Username: "User",
        Email: "User@gmail.com",
        profilePicture: "https://i.ibb.co/F5qSVcT/user.jpg",
        Balance: 130000
        }


const UserPage = () =>{

    const [UsernameVisible, setUsernameVisible] = useState(false);
    const [PasswordVisible, setPasswordVisible] = useState(false);
    const [DeleteVisible, setDeleteVisible] = useState(false);
    
    const handleClickUsername = () => {
        setUsernameVisible(true);
    };
    const handleClickPassword = () => {
        setPasswordVisible(true);
    };
    const handleClickDelete = () => {
        setDeleteVisible(true);
    };

    const hideUsername = () => {
        setUsernameVisible(false);
    };
    const hidePassword = () => {
        setPasswordVisible(false);
    };
    const hideDelete = () => {
        setDeleteVisible(false);
    };
    

    return(
        <Fragment>
            <Header/>
            <div className={classes.pageContainer}>
                <div className={classes.leftContainer}>
                    <div className={classes.profilePicture}>
                        <div><img src={user.profilePicture} alt="error" /></div>
                        <div className={classes.changePicture}>
                            <a href="#1">
                                Change Picture
                            </a>
                        </div>
                    </div>
                    <div className={classes.deleteButton1}>
                        <a href="#2" onClick={()=>handleClickDelete()}>
                            <div className={classes.deleteAccount}>
                                    Delete Account
                            </div>
                        </a>
                    </div>
                    
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.username}>
                        <div className={classes.usernameHeader}>
                            <span>User Name: </span>  
                            <a href="#3" onClick={()=>handleClickUsername()}>
                                Change
                            </a> 
                        </div>
                        <div>{user.Username}</div>
                    </div>
                    <div className={classes.email}> 
                        <div className={classes.emailHeader}>
                            <span>Email: </span> 
                            <a href="#4">
                                Change
                            </a>
                        </div> 
                        <div>
                            {user.Email}
                        </div>
                    </div>
                    <div className={classes.balance}>
                        <div className={classes.balanceHeader}>
                            <span>Balance: </span> 
                            <Link to={"/TopUp"}>
                                <div className={classes.topUpButton}>Top Up +</div>
                            </Link>
                            
                        </div>
                        <div>
                            Rp. {user.Balance}
                        </div>

                    </div>
                    <div className={classes.buttons}>
                        <a href="#5" onClick={()=>handleClickPassword()}>
                            <div className={classes.changePassword}>
                                Change Password
                            </div>  
                        </a>

                        <div className={classes.deleteButton2}>
                            <a href="#2" onClick={()=>handleClickDelete()}>
                                <div className={classes.deleteAccount}>
                                        Delete Account
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            {UsernameVisible && <ChangeUsernamePopUp handleClose={hideUsername} />}
            {PasswordVisible && <ChangePasswordPopUp handleClose={hidePassword} />}
            {DeleteVisible && <DeleteAccountPopUp handleClose={hideDelete} />}
            </div>
            
            <Footer/>
        </Fragment>
    )
}

export default UserPage;