import { Link } from "react-router-dom";
import classes from "./NotFound.module.css"
import notfound from "../../assets/img/notfound.svg"
import { useEffect } from "react";
const NotFound = ()=>{
    useEffect(()=>{
        document.title = "Not Found | 404"
    },[]);
    return (
        <div className={classes.notfoundContainer}>
            <img src={notfound} alt="" className={classes.notfoundImg}/>
            <div className={classes.notfound}>
            <h1>Page Not Found</h1>
            <Link to={"/"} className={classes.notfoundLink}>Go back to main page.</Link>
            </div>
        </div>
    );
}

export default NotFound;