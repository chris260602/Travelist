import { Fragment, useEffect } from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./UpdateCategory.module.css";
import loader from "../../assets/svg_animation/loader.svg";
import NotFound from "../NotFound/NotFound";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
const UpdateCategory = () => {
  const [pageNotFound, setPageNotFound] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isValueValid, setIsValueValid] = useState(true);
  const { id } = useParams();
  const [categoryIconContainer, setCategoryIconContainer] = useState("");
  const categoryName = useRef();
  const categoryValue = useRef();
  const categoryIcon = useRef();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user.userRole === -1 || user.userRole === 0) {
      navigate("/login");
    }
    const getCategoryData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/categories/${id}`
        );
        await fillInput(response.data.data);
      } catch (e) {
        setPageNotFound(true);
      }
    };
    getCategoryData();

    document.title = "Update Category | Travelist";
  }, []);

  const setImages = (data) => {
    console.log(data.categoryIcon);
    setCategoryIconContainer(<img src={data.categoryIcon} alt="ERROR" />);
  };
  const fillInput = async (data) => {
    categoryName.current.value = data.categoryName;
    categoryValue.current.value = data.categoryValue;
    setImages(data);
  };
  const checkNewImageInserted = () => {
    let notInserted = [];

    if (categoryIconContainer === "") {
      notInserted.push("Category Icon");
    }
    if (notInserted.length === 0) {
      return true;
    } else {
      alert(`Please insert or remove ${notInserted} before updating`);
      return false;
    }
  };
  const updateCategoryHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let formData = new FormData();
    let isValid = true;
    if (categoryName.current.value.length < 2) {
      isValid = false;
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
    if (categoryValue.current.value.length < 2) {
      isValid = false;
      setIsValueValid(false);
    } else {
      setIsValueValid(true);
    }
    if (isValid && checkNewImageInserted()) {
      formData.append("categoryName", categoryName.current.value);
      formData.append("categoryValue", categoryValue.current.value);

      if (categoryIcon.current.files.length > 0) {
        formData.append("categoryIcon", categoryIcon.current.files[0]);
      }

      try {
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/categories/update/${id}`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        navigate("/categories");
      } catch (e) {
        alert("Something went wrong");
      }
    }
    setIsSubmit(false);
  };
  const cancelBtnHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Your input will not be saved if you leave now")) {
      navigate("/categories");
    }
  };
  const changeImage = (image, container) => {
    if (image.current.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        container(<img src={reader.result} alt="ERROR" />);
      };
      reader.readAsDataURL(image.current.files[0]);
    } else {
      container("");
    }
  };

  const imagesForm = (
    <div className={classes.imageContainer}>
      <div className={` ${classes.imageFormContainer}`}>
        <label htmlFor="categoryIcon">Category Icon</label>
        {categoryIconContainer}
        <input
          type="file"
          name="categoryIcon"
          id="categoryIcon"
          accept="image/png, image/gif, image/jpeg"
          onChange={() => changeImage(categoryIcon, setCategoryIconContainer)}
          ref={categoryIcon}
        />
      </div>
    </div>
  );

  return (
    <Fragment>
      {pageNotFound ? (
        <NotFound />
      ) : (
        <Fragment>
          <Header />
          <div className={classes.formContainer}>
            {isSubmit ? (
              <div className={classes.loaderWrapper}>
                <img src={loader} alt="Loading..." />
              </div>
            ) : (
              ""
            )}
            <form
              className={classes.updateCategoryForm}
              onSubmit={updateCategoryHandler}
            >
              {!isNameValid ? (
                <p className={classes.errorIndicator}>
                  Name Must be atleast 2 characters long
                </p>
              ) : (
                ""
              )}
              <div className={classes.formChild}>
                <label htmlFor="categoryName">Name:</label>
                <input
                  type="text"
                  id="categoryName"
                  ref={categoryName}
                  required
                />
              </div>
              {!isValueValid ? (
                <p className={classes.errorIndicator}>
                  Value Must be atleast 2 characters long
                </p>
              ) : (
                ""
              )}
              <div className={classes.formChild}>
                <label htmlFor="categoryValue">Price:</label>
                <input
                  type="text"
                  id="categoryValue"
                  name="categoryValue"
                  ref={categoryValue}
                  required
                />
              </div>

              {imagesForm}

              <div className={classes.buttonContainer}>
                {isSubmit ? (
                  ""
                ) : (
                  <Fragment>
                    <button onClick={cancelBtnHandler}>Cancel</button>
                    <button>Update Category</button>
                  </Fragment>
                )}
              </div>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default UpdateCategory;
