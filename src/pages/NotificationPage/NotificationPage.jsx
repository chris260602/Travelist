import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./NotificationPage.module.css";
import NotificationCardList from "./components/notificationCardList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotificationPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user.userRole === -1 || user.userRole === 1) {
      navigate("/login");
      return;
    }
  }, []);
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <p className={classes.title}>Notification</p>
        <div className={classes.container}>
          <NotificationCardList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;
