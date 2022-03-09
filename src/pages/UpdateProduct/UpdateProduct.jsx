import { Fragment, useEffect } from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./UpdateProduct.module.css";
import loader from "../../assets/svg_animation/loader.svg";
import NotFound from "../NotFound/NotFound";
const UpdateProduct = () => {
  const [pageNotFound, setPageNotFound] = useState(false);
  const [totalPictures, setTotalPictures] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isStocksValid, setIsStocksValid] = useState(true);
  const [isContentValid, setIsContentValid] = useState(true);
  const { id } = useParams();
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
  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/products/${id}`
        );
        await fillInput(response.data.data[0]);
      } catch (e) {
        setPageNotFound(true);
      }
    };
    getProductData();
  }, []);

  const setImages = (number, data) => {
    if (number === 4) {
      setMainPictureContainer(<img src={data.mainpicture} alt="ERROR" />);
      setPicture2Container(<img src={data.picture2} alt="ERROR" />);
      setPicture3Container(<img src={data.picture3} alt="ERROR" />);
      setPicture4Container(<img src={data.picture4} alt="ERROR" />);
    } else if (number === 3) {
      setMainPictureContainer(<img src={data.mainpicture} alt="ERROR" />);
      setPicture2Container(<img src={data.picture2} alt="ERROR" />);
      setPicture3Container(<img src={data.picture3} alt="ERROR" />);
    } else if (number === 2) {
      setMainPictureContainer(<img src={data.mainpicture} alt="ERROR" />);
      setPicture2Container(<img src={data.picture2} alt="ERROR" />);
    } else {
      setMainPictureContainer(<img src={data.mainpicture} alt="ERROR" />);
    }
  };
  const fillInput = async (data) => {
    name.current.value = data.productname;
    price.current.value = data.price;
    stocks.current.value = data.productstocks;
    category.current.value = data.category;
    content.current.value = data.content;
    if (data.picture4 !== "null") {
      setTotalPictures(4);
      setImages(4, data);
    } else if (data.picture3 !== "null") {
      setTotalPictures(3);
      setImages(3, data);
    } else if (data.picture2 !== "null") {
      setTotalPictures(2);
      setImages(2, data);
    } else {
      setTotalPictures(1);
      setImages(1, data);
    }
  };
  const checkNewImageInserted = () => {
    let notInserted = [];
    if (totalPictures === 4) {
      if (picture4Container === "") {
        notInserted.push("Picture4");
      }
      if (picture3Container === "") {
        notInserted.push("Picture3");
      }
      if (picture2Container === "") {
        notInserted.push("Picture2");
      }
      if (mainpictureContainer === "") {
        notInserted.push("Main Picture");
      }
      if (notInserted.length === 0) {
        return true;
      } else {
        alert(`Please insert or remove ${notInserted} before updating`);
        return false;
      }
    } else if (totalPictures === 3) {
      if (picture3Container === "") {
        notInserted.push("Picture3");
      }
      if (picture2Container === "") {
        notInserted.push("Picture2");
      }
      if (mainpictureContainer === "") {
        notInserted.push("Main Picture");
      }
      if (notInserted.length === 0) {
        return true;
      } else {
        alert(`Please insert or remove ${notInserted} before updating`);
        return false;
      }
    } else if (totalPictures === 2) {
      if (picture2Container === "") {
        notInserted.push("Picture2");
      }
      if (mainpictureContainer === "") {
        notInserted.push("Main Picture");
      }
      if (notInserted.length === 0) {
        return true;
      } else {
        alert(`Please insert or remove ${notInserted} before updating`);
        return false;
      }
    } else if (totalPictures === 1) {
      if (mainpictureContainer === "") {
        notInserted.push("Main Picture");
      }
      if (notInserted.length === 0) {
        return true;
      } else {
        alert(`Please insert or remove ${notInserted} before updating`);
        return false;
      }
    } else {
      alert(`Something went wrong`);
      return false;
    }
  };
  const updateProductHandler = async (e) => {
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
    if (isValid && checkNewImageInserted()) {
      formData.append("name", name.current.value);
      formData.append("price", price.current.value);
      formData.append("stocks", stocks.current.value);
      formData.append("category", category.current.value);
      formData.append("content", content.current.value);

      if (totalPictures === 4) {
        if (mainpicture.current.files.length > 0) {
          formData.append("mainpicture", mainpicture.current.files[0]);
        }
        if (picture2.current.files.length > 0) {
          formData.append("picture2", picture2.current.files[0]);
        }
        if (picture3.current.files.length > 0) {
          formData.append("picture3", picture3.current.files[0]);
        }
        if (picture4.current.files.length > 0) {
          formData.append("picture4", picture4.current.files[0]);
        }
      } else if (totalPictures === 3) {
        if (mainpicture.current.files.length > 0) {
          formData.append("mainpicture", mainpicture.current.files[0]);
        }
        if (picture2.current.files.length > 0) {
          formData.append("picture2", picture2.current.files[0]);
        }
        if (picture3.current.files.length > 0) {
          formData.append("picture3", picture3.current.files[0]);
        }
      } else if (totalPictures === 2) {
        if (mainpicture.current.files.length > 0) {
          formData.append("mainpicture", mainpicture.current.files[0]);
        }
        if (picture2.current.files.length > 0) {
          formData.append("picture2", picture2.current.files[0]);
        }
      } else if (totalPictures === 1) {
        if (mainpicture.current.files.length > 0) {
          formData.append("mainpicture", mainpicture.current.files[0]);
        }
      }
      formData.append("pictureqty", totalPictures);
      try {
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/products/updateproduct/${id}`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        navigate("/");
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
    <Fragment>
      {pageNotFound ? (
        <NotFound />
      ) : (
        <div className={classes.formContainer}>
          {isSubmit ? (
            <div className={classes.loaderWrapper}>
              <img src={loader} alt="Loading..." />
            </div>
          ) : (
            ""
          )}
          <form
            className={classes.updateProductForm}
            onSubmit={updateProductHandler}
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
                  <button>Update Product</button>
                </Fragment>
              )}
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};
export default UpdateProduct;