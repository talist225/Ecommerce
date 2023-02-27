import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ShippingPage from "./pages/ShippingPage/ShippingPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import UserListPage from "./pages/UserListPage/UserListPage";
import UserEditPage from "./pages/UserEditPage/UserEditPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage/ProductEditPage";
import OrderListPage from "./pages/OrderListPage/OrderListPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/admin/user/:id/edit" component={UserEditPage} />
          <Route path="/admin/productlist" component={ProductListPage} exact />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListPage}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditPage} />
          <Route path="/admin/orderlist" component={OrderListPage} />
          <Route path="/search/:keyword" component={HomePage} exact />
          <Route path="/page/:pageNumber" component={HomePage} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomePage}
            exact
          />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
