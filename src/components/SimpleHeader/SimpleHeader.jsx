import classes from "./SimpleHeader.module.css"
import { Link } from "react-router-dom"
import logo from "../../assets/company_name/Travelist.svg"
const SimpleHeader = ()=>{
    return(
        <div className={classes.headerContainer}>
          <Link to={"/"} className={classes.logoContainer}>
            <img src={logo} alt="Travelist" />
          </Link>
        </div>
    )
}
export default SimpleHeader;