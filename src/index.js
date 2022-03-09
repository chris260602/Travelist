import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Productdetail from "./pages/ProductDetail/productDetail"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="createproduct" element={<CreateProduct />} />
        <Route path="updateproduct/:id" element={<UpdateProduct />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="productdetail" element={<Productdetail/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
