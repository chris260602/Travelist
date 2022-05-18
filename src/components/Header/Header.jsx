import { Link, useNavigate } from "react-router-dom";
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
import { logoff } from "../../store/reducers/userReducer/userReducer";
const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [showCartCard, setShowCartCard] = useState(false);
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [isFirstTime] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const headerStartUp = async () => {
      if (user && user.userRole !== -1) {
        await checkSession();
      }
      if (isFirstTime && user.userRole === 0) {
        await getCartData();
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
