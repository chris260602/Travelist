import { Fragment, useEffect, useState } from "react";
import classes from "./App.module.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CategoryCard from "./components/CategoryCard/categoryCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import DeleteProductCard from "./components/ProductCard/components/DeleteProductCard";
import ProductCardList from "./components/ProductCard/ProductCardList";
import axios from "axios";
import CategoryCardList from "./components/CategoryCard/categoryCardList";

const App = () => {
  const user = useSelector((state) => state.user);
  const [seeAll, setSeeAll] = useState(false);
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    getProductsDataHander();
    getCategoryDataHander();
  }, []);
  const getProductsDataHander = async () => {
    // setIsLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/popular`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    setProductData(response.data.data);
  };
  const seeAllHandler = () => {
    setSeeAll((prevState) => !prevState);
  };
  const getCategoryDataHander = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/categories/`,
      {
        withCredentials: true,
      }
    );
    setCategoryData(response.data.data);
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

          <CategoryCardList seeAll={seeAll} data={categoryData}/>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.titleOfSection}>
            <p>Most Popular</p>
          </div>
          <ProductCardList isAdmin={user.userRole === 1} data={productData} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
