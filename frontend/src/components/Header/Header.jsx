import React from "react";
import { NavLink, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import SearchBox from "../SearchBox/SearchBox";
import { logout } from "../../actions/userActions";
import "./header.css";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="sticky-nav-bar">
        <header dir="rtl">
          <Navbar
            bg="dark"
            className="navbar navbar-light"
            expand="lg"
            collapseOnSelect
          >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <Image
                    src="images/tal-phone.png"
                    alt="טל-פון"
                    fluid
                    className="w-75"
                  />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Route
                  render={({ history }) => <SearchBox history={history} />}
                />
                <Nav className="mr-auto d-flex justify-content-between align-items-center mt-3">
                  {userInfo ? (
                    <NavDropdown
                      title={userInfo.name}
                      id="username"
                      className="menu-links"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                          <span className="nav-drop-item">פרופיל</span>
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        <span className="nav-drop-item">התנתקות</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <span className="menu-links"> התחברות </span>
                        <i className="fas fa-user"></i>
                      </Nav.Link>
                    </LinkContainer>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown
                      title="פאנל מנהל "
                      id="adminmenu"
                      className="menu-links"
                    >
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>
                          <span className="nav-drop-item">כל המשתמשים</span>
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>
                          <span className="nav-drop-item">כל המוצרים</span>
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>
                          <span className="nav-drop-item">הזמנות</span>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                  <LinkContainer to="/cart">
                    <Nav.Link className="menu-links">
                      עגלת קניות <i className="fa-solid fa-bag-shopping"></i>
                      <span className="cart-count">
                        {cartItems.length === 0 ? (
                          <span>0</span>
                        ) : (
                          <span>
                            {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                          </span>
                        )}
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <header className="header-bottom py-3">
          <div className="container m-auto">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                  <div className="d-flex align-items-center menu-links">
                    <NavLink className="link" to="/">
                      בית
                    </NavLink>
                    <NavLink className="link" to="/store">
                      חנות
                    </NavLink>
                    <NavLink className="link" to="/about">
                      אודות
                    </NavLink>
                    <NavLink className="link" to="/contact">
                      יצירת קשר
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
