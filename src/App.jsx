import { Fragment, useEffect, useState } from "react";
import classes from "./App.module.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CategoryCard from "./components/CategoryCard/categoryCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import DeleteProductCard from "./components/ProductCard/components/DeleteProductCard";
import ProductCardList from "./components/ProductCard/ProductCardList";

const App = () => {
  const user = useSelector((state) => state.user);
  const [seeAll, setSeeAll] = useState(false);
  const seeAllHandler = () => {
    setSeeAll((prevState) => !prevState);
  };

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
              <p className={classes.seeAll} onClick={seeAllHandler}>
                {seeAll ? "Minimize" : "See all"}
              </p>
            </div>
          </div>
          <CategoryCard seeAll={seeAll} />
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.titleOfSection}>
            <p>Most Popular</p>
          </div>
          <ProductCardList isAdmin={user.userRole === 1} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
