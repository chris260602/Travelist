import { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SpecialCard from "../../components/SpecialCard/SpecialCard";
import classes from "./Categories.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
  const [cardContainer, setCardContainer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getCategoryDataHander();
    if (categoryData) {
      setCardContainer(cardContainerHandler);
    }
    setIsLoading(false);
  }, [categoryData.length]);
  const getCategoryDataHander = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/categories/`,
      {
        withCredentials: true,
      }
    );
    setCategoryData(response.data.data);
  };
  const cardContainerHandler = () => {
    return (
      <div className={classes.cardContainer}>
        {categoryData.length > 0 ? (
          categoryData.map((data) => (
            <SpecialCard
              id={data._id}
              imgURL={data.categoryIcon}
              info={[
                { title: "Name:", value: data.categoryName },
                { title: "Value:", value: data.categoryValue },
              ]}
              editHandler={() => navigate(`/updatecategory/${data._id}`)}
              removeHandler={() => removeCategoryHandler(data._id)}
            />
          ))
        ) : (
          <h1>No data</h1>
        )}
      </div>
    );
  };
  const removeCategoryHandler = async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/categories/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    getCategoryDataHander();
  };
  return (
    <Fragment>
      <Header />

      <div className={classes.container}>
        {isLoading ? (
          <h1 className={classes.loading}>Loading...</h1>
        ) : (
          <Fragment>
            <h1 className={classes.mainTitle}>Categories</h1>
            <div className={classes.buttonContainer}>
              <div
                className={classes.addCategoryButton}
                onClick={() => navigate("/addcategory")}
              >
                <p>Add Category</p>
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

export default Categories;
