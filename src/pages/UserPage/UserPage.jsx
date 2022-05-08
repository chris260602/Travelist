import React, { Fragment } from "react";
import classes from "./UserPage.module.css";
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
                        <a href="#2">
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
                            <a href="#3">
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
                        <a href="#5">
                            <div className={classes.changePassword}>
                                Change Password
                            </div>  
                        </a>

                        <div className={classes.deleteButton2}>
                            <a href="#2">
                                <div className={classes.deleteAccount}>
                                        Delete Account
                                </div>
                            </a>
                        </div>
                    </div>
                    

                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default UserPage;