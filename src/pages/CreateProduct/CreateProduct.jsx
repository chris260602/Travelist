import { Fragment } from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CreateProduct.module.css";
import loader from "../../assets/svg_animation/loader.svg";
const CreateProduct = () => {
  const [totalPictures, setTotalPictures] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isStocksValid, setIsStocksValid] = useState(true);
  const [isContentValid, setIsContentValid] = useState(true);
  const [mainpictureContainer, setMainPictureContainer] = useState("");
  const [picture2Container, setPicture2Container] = useState("");
  const [picture3Container, setPicture3Container] = useState("");
  const [picture4Container, setPicture4Container] = useState("");
  const name = useRef();
  const price = useRef();
  const stocks = useRef();
  const category = useRef();
  const content = useRef();
  const mainpicture = useRef();
  const picture2 = useRef();
  const picture3 = useRef();
  const picture4 = useRef();
  const navigate = useNavigate();

  const checkIsPictureInserted = (picture, minVal) => {
    if (picture.current !== null && totalPictures >= minVal) {
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
    name.current.value = "";
    price.current.value = "";
    stocks.current.value = "";
    category.current.value = "Bathroom";
    content.current.value = "";
    if (checkIsPictureInserted(mainpicture, 1)) {
      mainpicture.current.value = "";
      changeImage(mainpicture, setMainPictureContainer);
    }
    if (checkIsPictureInserted(picture2, 2)) {
      picture2.current.value = "";
      changeImage(picture2, setPicture2Container);
    }
    if (checkIsPictureInserted(picture3, 3)) {
      picture3.current.value = "";
      changeImage(picture3, setPicture3Container);
    }
    if (checkIsPictureInserted(picture4, 4)) {
      picture4.current.value = "";
      changeImage(picture4, setPicture4Container);
    }
  };
  const createProductHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let formData = new FormData();
    let isValid = true;
    if (name.current.value.length < 2) {
      isValid = false;
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
    if (price.current.value === "" || price.current.value < 0) {
      isValid = false;
      setIsPriceValid(false);
    } else {
      setIsPriceValid(true);
    }
    if (stocks.current.value === "" || stocks.current.value < 0) {
      isValid = false;
      setIsStocksValid(false);
    } else {
      setIsStocksValid(true);
    }
    if (content.current.value.length < 1) {
      isValid = false;
      setIsContentValid(false);
    } else {
      setIsContentValid(true);
    }
    if (isValid) {
      formData.append("name", name.current.value);
      formData.append("price", price.current.value);
      formData.append("stocks", stocks.current.value);
      formData.append("category", category.current.value);
      formData.append("content", content.current.value);
      if (mainpicture.current.files[0] !== undefined) {
        formData.append("mainpicture", mainpicture.current.files[0]);
      } else {
        return;
      }
      if (checkIsPictureInserted(picture2, 2)) {
        formData.append("picture2", picture2.current.files[0]);
      }
      if (checkIsPictureInserted(picture3, 3)) {
        formData.append("picture3", picture3.current.files[0]);
      }
      if (checkIsPictureInserted(picture4, 4)) {
        formData.append("picture4", picture4.current.files[0]);
      }
      try {
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/products/`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        clearInput();
      } catch (e) {
        alert("Something went wrong");
      }
    }
    setIsSubmit(false);
  };
  const cancelBtnHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Your input will not be saved if you leave now")) {
      navigate("/");
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
  const addPictureAmountHandler = (e) => {
    e.preventDefault();
    if (totalPictures < 4) {
      setTotalPictures((prevState) => (prevState += 1));
    }
  };
  const decreasePictureAmountHandler = (e) => {
    e.preventDefault();
    if (totalPictures === 4) {
      setPicture4Container("");
    }
    if (totalPictures === 3) {
      setPicture3Container("");
    }
    if (totalPictures === 2) {
      setPicture2Container("");
    }
    if (totalPictures > 1) {
      setTotalPictures((prevState) => (prevState -= 1));
    }
  };
  const imagesForm = (
    <div className={classes.imageContainer}>
      <div className={` ${classes.imageFormContainer}`}>
        <label htmlFor="mainpicture">Main Picture</label>
        {mainpictureContainer}
        <input
          type="file"
          name="mainpicture"
          id="mainpicture"
          accept="image/png, image/gif, image/jpeg"
          required
          onChange={() => changeImage(mainpicture, setMainPictureContainer)}
          ref={mainpicture}
        />
      </div>
      {totalPictures >= 2 ? (
        <div className={` ${classes.imageFormContainer}`}>
          <label htmlFor="picture2">Picture2</label>
          {picture2Container}
          <input
            type="file"
            name="picture2"
            id="picture2"
            accept="image/png, image/gif, image/jpeg"
            required
            onChange={() => changeImage(picture2, setPicture2Container)}
            ref={picture2}
          />
        </div>
      ) : (
        ""
      )}
      {totalPictures >= 3 ? (
        <div className={` ${classes.imageFormContainer}`}>
          <label htmlFor="picture3">Picture3</label>
          {picture3Container}
          <input
            type="file"
            name="picture3"
            id="picture3"
            accept="image/png, image/gif, image/jpeg"
            required
            onChange={() => changeImage(picture3, setPicture3Container)}
            ref={picture3}
          />
        </div>
      ) : (
        ""
      )}
      {totalPictures === 4 ? (
        <div className={` ${classes.imageFormContainer}`}>
          <label htmlFor="picture4">Picture4</label>
          {picture4Container}
          <input
            type="file"
            name="picture4"
            id="picture4"
            accept="image/png, image/gif, image/jpeg"
            required
            onChange={() => changeImage(picture4, setPicture4Container)}
            ref={picture4}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <div className={classes.formContainer}>
      {isSubmit ? (
        <div className={classes.loaderWrapper}>
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        ""
      )}
      <form
        className={classes.createProductForm}
        onSubmit={createProductHandler}
      >
        {!isNameValid ? (
          <p className={classes.errorIndicator}>
            Name Must be atleast 2 characters long
          </p>
        ) : (
          ""
        )}
        <div className={classes.formChild}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={name} required />
        </div>
        {!isPriceValid ? (
          <p className={classes.errorIndicator}>
            Price can't have negative value
          </p>
        ) : (
          ""
        )}
        <div className={classes.formChild}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            min={0}
            name="price"
            ref={price}
            required
          />
        </div>
        {!isStocksValid ? (
          <p className={classes.errorIndicator}>
            Stocks can't have negative value
          </p>
        ) : (
          ""
        )}
        <div className={classes.formChild}>
          <label htmlFor="stocks">Stocks:</label>
          <input type="number" id="stocks" min={0} ref={stocks} required />
        </div>
        <div className={classes.formChild}>
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" ref={category}>
            <option value="Bathroom">Bathroom</option>
            <option value="Electronics">Electronics</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothes">Clothes</option>
            <option value="BeautyHealth">Beauty & Health</option>
            <option value="Tools">Tools</option>
            <option value="Bag">Bag</option>
            <option value="Accessories">Accessories</option>
            <option value="FoodDrinks">Food & Drinks</option>
            <option value="Bed">Bed</option>
            <option value="Pest Control">Pest Control</option>
            <option value="Games">Games</option>
          </select>
        </div>
        {!isContentValid ? (
          <p className={classes.errorIndicator}>Content cannot be empty</p>
        ) : (
          ""
        )}
        <div className={classes.formChild}>
          <label htmlFor="content">Content:</label>
          <textarea type="text" id="content" ref={content} required />
        </div>
        {imagesForm}
        <div className={classes.toggleImageButtonContainer}>
          <button
            onClick={decreasePictureAmountHandler}
            className={classes.removePictureBtn}
          >
            Remove
          </button>
          <button
            onClick={addPictureAmountHandler}
            className={classes.addPictureBtn}
          >
            Add More
          </button>
        </div>

        <div className={classes.buttonContainer}>
          {isSubmit ? (
            ""
          ) : (
            <Fragment>
              <button onClick={cancelBtnHandler}>Cancel</button>
              <button>Create Product</button>
            </Fragment>
          )}
        </div>
      </form>
    </div>
  );
};
export default CreateProduct;
