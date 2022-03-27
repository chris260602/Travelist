import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
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
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/" element={<App />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="productdetail" element={<Productdetail />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
