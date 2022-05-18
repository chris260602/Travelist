import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./NotificationPage.module.css";
import NotificationCardList from "./components/notificationCardList";

const NotificationPage = () => {
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <p className={classes.title}>
          Notification
        </p>
        <div className={classes.container}>
          <NotificationCardList/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;
