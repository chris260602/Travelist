import { Fragment, useEffect } from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddCategory.module.css";
import loader from "../../assets/svg_animation/loader.svg";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
const AddCategory = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isValueValid, setIsValueValid] = useState(true);
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

    document.title = "Add Category | Travelist";
  }, []);
  const checkIsPictureInserted = (picture, minVal) => {
    if (picture.current !== null && 1 >= minVal) {
      if (picture.current.files[0] !== undefined) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const clearInput = () => {
    categoryName.current.value = "";
    categoryValue.current.value = "";
    if (checkIsPictureInserted(categoryIcon, 1)) {
      categoryIcon.current.value = "";
      changeImage(categoryIcon, setCategoryIconContainer);
    }
  };
  const addCategoryHandler = async (e) => {
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

    if (isValid) {
      formData.append("categoryName", categoryName.current.value);
      formData.append("categoryValue", categoryValue.current.value);
      if (categoryIcon.current.files[0] !== undefined) {
        formData.append("categoryIcon", categoryIcon.current.files[0]);
      } else {
        return;
      }
      try {
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/categories/create`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        clearInput();
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
          required
          onChange={() => changeImage(categoryIcon, setCategoryIconContainer)}
          ref={categoryIcon}
        />
      </div>
    </div>
  );

  return (
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
        <form className={classes.addCategoryForm} onSubmit={addCategoryHandler}>
          {!isNameValid ? (
            <p className={classes.errorIndicator}>
              Name Must be atleast 2 characters long
            </p>
          ) : (
            ""
          )}
          <div className={classes.formChild}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={categoryName} required />
          </div>
          {!isValueValid ? (
            <p className={classes.errorIndicator}>
              Value Must be atleast 2 characters long
            </p>
          ) : (
            ""
          )}
          <div className={classes.formChild}>
            <label htmlFor="value">Value:</label>
            <input
              type="text"
              id="value"
              name="value"
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
                <button>Add Category</button>
              </Fragment>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default AddCategory;
