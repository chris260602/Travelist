import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import searchIcon from "../../assets/img/searchIcon.svg";
import logoIcon from "../../assets/company_name/Travelist.svg";
import cartIcon from "../../assets/img/cartIcon.svg";
import notificationBellIcon from "../../assets/img/notifcationBellIcon.svg";
import CartHoverCard from "./CartHoverCard";
import ProfileHoverCard from "./ProfileHoverCard";
import NotificationHoverCard from "./NotificationHoverCard";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCartData } from "../../store/reducers/cartReducer/cartReducer";
import { logoff } from "../../store/reducers/userReducer/userReducer";
import { setSeenNotificationData } from "../../store/reducers/notificationReducer/notificationReducer";
const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);
  const [showCartCard, setShowCartCard] = useState(false);
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [isFirstTime] = useState(true);
  const searchRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const headerStartUp = async () => {
      if (user && user.userRole !== -1) {
        await checkSession();
      }
      if (isFirstTime && user.userRole === 0) {
        await getCartData();
        await getNotification();
      }
    };
    headerStartUp();
  }, []);
  const checkSession = async () => {
    try {
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/verifysession`,
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      navigate("/");
      dispatch(logoff());
      return;
    }
  };
  const getCartData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      let totalData = 0;
      const cartHeaderData = response.data.data.map((item) => {
        totalData++;
        return {
          productPicture: item.productID.mainPicture,
          productName: item.productID.productName,
          productAmount: item.quantity,
          productPrice: item.productID.productPrice,
        };
      });
      dispatch(setCartData({ totalData, cartHeaderData }));
    } catch (e) {
      console.log(e);
    }
  };
  const getNotification = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/notification/notread/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      let totalData = 0;
      const notificationHeaderData = response.data.data.map((item) => {
        totalData++;
        return {
          type: item.type,
          title: item.title,
          content: item.content,
        };
      });
      dispatch(setSeenNotificationData({ totalData, notificationHeaderData }));
    } catch (e) {
      console.log("Something Went Wrong");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchProductByName();
    }
  };
  const handleSearchProductByName = async () => {
    console.log(searchRef.current.value);
    if (searchRef.current.value.length > 0) {
      navigate(`/products/name/${searchRef.current.value}`);
      searchRef.current.value = "";
    }
    // to={`/products/name/${searchRef.current}`}
  };
  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <Link to={"/"}>
          <img src={logoIcon} alt="Travelist" />
        </Link>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.searchBarContainer}>
          <input
            type="text"
            placeholder="Search"
            ref={searchRef}
            onKeyDown={handleKeyDown}
          />
          <div
            className={classes.searchLink}
            onClick={handleSearchProductByName}
          >
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        <div className={classes.iconContainer}>
          {user.userID === "" ? (
            <Fragment>
              <div className={classes.loginButtonContainer}>
                <Link to={"/login"}>Login</Link>
              </div>
              <div className={classes.registerButtonContainer}>
                <Link to={"/register"}>Register</Link>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              {user.userRole === 0 ? (
                <Fragment>
                  <div
                    className={classes.cartContainer}
                    onMouseEnter={() => setShowCartCard(true)}
                    onMouseLeave={() => setShowCartCard(false)}
                  >
                    <Link to={"/cart"} className={classes.cartLink}>
                      <img src={cartIcon} alt="cart" />
                      {cart.totalProduct === 0 ? (
                        ""
                      ) : (
                        <p className={classes.pendingIcon}>
                          {cart.totalProduct}
                        </p>
                      )}
                    </Link>
                    {showCartCard ? (
                      <CartHoverCard active="true" data={cart} />
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={classes.notificationContainer}
                    onMouseEnter={() => setShowNotificationCard(true)}
                    onMouseLeave={() => setShowNotificationCard(false)}
                  >
                    <Link
                      to={"/notification"}
                      className={classes.notificationLink}
                    >
                      <img src={notificationBellIcon} alt="notification" />
                      {notification.totalNotification === 0 ? (
                        ""
                      ) : (
                        <p className={classes.pendingIcon}>
                          {notification.totalNotification}
                        </p>
                      )}
                    </Link>
                    {showNotificationCard ? (
                      <NotificationHoverCard
                        active="true"
                        data={notification}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </Fragment>
              ) : (
                ""
              )}

              <div
                className={classes.profileContainer}
                onMouseEnter={() => setShowProfileCard(true)}
                onMouseLeave={() => setShowProfileCard(false)}
              >
                <Link to={"/profile"} className={classes.profileLink}>
                  <p>{user.userName}</p>
                  <img src={user.profilePicture} alt="profile" />
                </Link>
                {showProfileCard ? (
                  <ProfileHoverCard
                    active="true"
                    userName={user.userName}
                    userID={user._id}
                    isAdmin={user.userRole === 1}
                  />
                ) : (
                  ""
                )}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
