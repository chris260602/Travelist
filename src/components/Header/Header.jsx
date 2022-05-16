import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import searchIcon from "../../assets/img/searchIcon.svg";
import logoIcon from "../../assets/company_name/Travelist.svg";
import cartIcon from "../../assets/img/cartIcon.svg";
import notificationBellIcon from "../../assets/img/notifcationBellIcon.svg";
import CartHoverCard from "./CartHoverCard";
import ProfileHoverCard from "./ProfileHoverCard";
import NotificationHoverCard from "./NotificationHoverCard";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCartData } from "../../store/reducers/cartReducer/cartReducer";
const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [showCartCard, setShowCartCard] = useState(false);
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [isFirstTime] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFirstTime && user.userRole === 0) {
      // getCartData();
    }
    getCartData();
  }, []);
  const getCartData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data.data);
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
      // console.log(totalData);
      // console.log("TotalData");
      // console.log(cartHeaderData);
      // console.log("CARD HEADER DATA");
      // setCartData(response.data.data);
    } catch (e) {
      alert("Please refresh your browser");
    }
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
          <input type="text" placeholder="Search" />
          <Link to={"/"} className={classes.searchLink}>
            <img src={searchIcon} alt="search" />
          </Link>
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
                      <p className={classes.pendingIcon}>1</p>
                    </Link>
                    {showNotificationCard ? (
                      <NotificationHoverCard active="true" />
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
