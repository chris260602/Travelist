import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store/store";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Productdetail from "./pages/ProductDetail/productDetail";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import HistoryPage from "./pages/History/History.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import TopUp from "./pages/TopUp/TopUp";
import AddCategory from "./pages/AddCategory/AddCategory";
import UpdateCategory from "./pages/UpdateCategory/UpdateCategory";
import Categories from "./pages/Categories/Categories";
import Wishlist from "./pages/Wishlist/Wishlist";
import Products from "./pages/ProductPage/ProductPage";
import ProductFilterName from "./pages/ProductFilterNamePage/ProductFilterName";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

//Testing
const App = React.lazy(() => {
  return Promise.all([
    import("./App"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports);
});
let persistor = persistStore(store);

ReactDOM.render(
  <Suspense fallback={<LoadingScreen />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="createproduct" element={<CreateProduct />} />
            <Route path="updateproduct/:id" element={<UpdateProduct />} />
            <Route path="/" element={<App />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} /> {/* BELUM JADI */}
            <Route path="notification" element={<NotificationPage />} />{" "}
            <Route path="profile" element={<ProfilePage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="topup" element={<TopUp />} />
            <Route path="productdetail/:id" element={<Productdetail />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="updatecategory/:id" element={<UpdateCategory />} />
            <Route path="categories" element={<Categories />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:filter" element={<Products />} />
            <Route
              path="products/name/:filter"
              element={<ProductFilterName />}
            />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
