import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logoIcon from "../../assets/company_name/Travelist.svg";
import instagramIcon from "../../assets/img/instagramIcon.svg";
import twitterIcon from "../../assets/img/twitterIcon.svg";
import linkedinIcon from "../../assets/img/linkedinIcon.svg";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.upperContainer}>
        <div
          className={`${classes.exploreContainer} ${classes.childContainer}`}
        >
          <h3>Explore</h3>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/about"}>
            <p>About</p>
          </Link>
          <Link to={"/products"}>
            <p>Products</p>
          </Link>
        </div>
        <div
          className={`${classes.businessContainer} ${classes.childContainer}`}
        >
          <h3>Business Inquiries</h3>
          <p>travelist@gmail.com</p>
          <p>+62 899 2353 633</p>
        </div>
        <div className={`${classes.followContainer} ${classes.childContainer}`}>
          <h3>Follow</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </div>
        <div className={`${classes.introContainer} ${classes.childContainer}`}>
          <img src={logoIcon} alt="Travelist" />
          <p>E-Commerce for travelling</p>
          {/* <p></p> */}
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <p>© 2022 Travelist. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
