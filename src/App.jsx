import { Fragment, useEffect, useState } from "react";
import classes from "./App.module.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CategoryCard from "./components/CategoryCard/categoryCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.rightContainer}>
          <div className={classes.firstSection}>
            <div className={classes.titleOfSection}>
              <p>Categories</p>
            </div>
            <div>
              <a href="" className={classes.seeAll}>
                See all
              </a>
            </div>
          </div>
          <CategoryCard />
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.titleOfSection}>
            <p>Most Popular</p>
          </div>
          <ProductCard />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
