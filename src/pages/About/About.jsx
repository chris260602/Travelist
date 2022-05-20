import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import travelistIcon from "../../assets/img/travelistIcon.svg";
import helpIcon from "../../assets/img/helpIcon.svg";
import ratingIcon from "../../assets/img/ratingIcon.svg";
import growthIcon from "../../assets/img/growth-mindsetIcon.svg";
import classes from "./About.module.css";
import { Fragment, useEffect } from "react";
const About = () => {

  useEffect(() => {
    document.title = "About | Travelist";
  },[])
  return (
    <Fragment>
      <section className={classes.aboutSection}>
        <h1>About Us</h1>
      </section>
      <main className={classes.aboutContainer}>
        <section className={classes.exploreSection}>
          <div className={classes.imageContainer}>
            <img src={travelistIcon} alt="error" />
          </div>
          <div className={classes.contentContainer}>
            <p>
              Travelist is an E-Commerce Website that focuses on selling the
              equipment needed by people who want to travel. With the Travelist,
              customers can get all their equipment just by visiting our
              website. Travelist provides the needs and supplies of food,
              clothing, and equipment that supports Your travels, tours, or
              camping.
            </p>
            <Link to={"/"} className={classes.exploreButton}>
              Explore Travelist
            </Link>
          </div>
        </section>
        <section className={classes.missionSection}>
          <h2 className={classes.mainSectionTitle}>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            vel ratione aspernatur dolorum mollitia molestias non assumenda
            aperiam unde adipisci reprehenderit itaque nemo illum rem atque
            tempora fuga odit sunt.
          </p>
        </section>
        <section className={classes.valueSection}>
          <h2 className={classes.mainSectionTitle}>Our Value</h2>
          <div className={classes.valueContainer}>
            <div className={classes.valueTopContainer}>
              <div className={classes.valueCard}>
                <img src={ratingIcon} alt="error" />
                <h3>Customer First</h3>
                <p>
                  Our Customers are our top priority and we are always
                  innovating to meet their needs.
                </p>
              </div>
              <div className={classes.valueCard}>
                <img src={helpIcon} alt="error" />
                <h3>Togetherness</h3>

                <p>
                  We enjoy spending time together as well as doing the things we
                  love as a unit. Creating a community where each individual
                  shines.
                </p>
              </div>
            </div>
            <div className={classes.valueBottomContainer}>
              <div className={classes.valueCard}>
                <img src={growthIcon} alt="error" />
                <h3>Growth Mindset</h3>
                <p>
                  Dare to accept challenges and see problems as opportunities to
                  start new things. and continue to improve overall performance
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Header /> */}
      <Footer />
    </Fragment>
  );
};

export default About;
