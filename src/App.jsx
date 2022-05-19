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
import { Link } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user);
  const [seeAll, setSeeAll] = useState(false);
  const [productData, setProductData] = useState([]);
  const [loadingProductData, setLoadingProductData] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [loadingCategoryData, setLoadingCategoryData] = useState(false);
  useEffect(() => {
    getProductsDataHander();
    getCategoryDataHander();
  }, []);
  const getProductsDataHander = async () => {
    setLoadingProductData(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/popular`,
      {
        withCredentials: true,
      }
    );
    setProductData(response.data.data);
    setLoadingProductData(false);
  };
  const seeAllHandler = () => {
    setSeeAll((prevState) => !prevState);
  };
  const getCategoryDataHander = async () => {
    setLoadingCategoryData(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/categories/`,
      {
        withCredentials: true,
      }
    );
    setCategoryData(response.data.data);
    setLoadingCategoryData(false);
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
          {loadingCategoryData ? (
            <p>Loading...</p>
          ) : (
            <CategoryCardList seeAll={seeAll} data={categoryData} />
          )}
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.titleOfSection}>
            <p>Most Popular</p>
            <Link to={"/products"}>See All Products</Link>
          </div>
          {loadingProductData ? (
            <p>Loading...</p>
          ) : (
            <ProductCardList isAdmin={user.userRole === 1} data={productData} />
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
