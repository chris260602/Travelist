import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Products.module.css";
import SpecialCard from "../../components/SpecialCard/SpecialCard";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const [cardContainer, setCardContainer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProductsDataHander();
    if (productData) {
      setCardContainer(cardContainerHandler);
    }
    setIsLoading(false);
  }, [productData.length]);
  const getProductsDataHander = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/`,
      {
        withCredentials: true,
      }
    );
    setProductData(response.data.data);
  };
  const cardContainerHandler = () => {
    return (
      <div className={classes.cardContainer}>
        {productData.length > 0 ? (
          productData.map((data) => (
            <SpecialCard
              id={data._id}
              imgURL={data.mainPicture}
              info={[
                { title: "Name:", value: data.productName },
                { title: "Category (Value):", value: data.categoryValue },
                { title: "Price:", value: data.productPrice },
                { title: "Stocks:", value: data.productStocks },
              ]}
              editHandler={() => navigate(`/updateproduct/${data._id}`)}
              removeHandler={() => removeProductHandler(data._id)}
            />
          ))
        ) : (
          <h1>No data</h1>
        )}
      </div>
    );
  };
  const removeProductHandler = async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/products/deleteproduct/${id}`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    getProductsDataHander();
  };
  return (
    <Fragment>
      <Header />

      <div className={classes.container}>
        {isLoading ? (
          <h1 className={classes.loading}>Loading...</h1>
        ) : (
          <Fragment>
            <h1 className={classes.mainTitle}>Products</h1>
            <div className={classes.buttonContainer}>
              <div
                className={classes.addProductButton}
                onClick={() => navigate("/createproduct")}
              >
                <p>Add Product</p>
              </div>
            </div>

            {cardContainer}
          </Fragment>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
