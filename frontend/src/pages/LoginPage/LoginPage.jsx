import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { login } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer/FormContainer";
import loginSchema from "../../validation/login.validation";
import validate from "../../validation/validation";
import "./loginPage.css";
import { toast } from "react-hot-toast";

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    const error = validate({ email, password }, loginSchema);
    if (error.error) {
      let errorMsgs = "";
      for (let errorItem of error.error.details) {
        switch (errorItem.type) {
          case "string.min":
            if (errorItem.context.label === "Password")
              errorMsgs += `סיסמא חייבת להכיל לפחות 8 תווים`;
            if (errorItem.context.label === "Email")
              errorMsgs += `אימייל חייב להכיל לפחות 6 תווים`;
            break;
          case "string.max":
            if (errorItem.context.label === "Password")
              errorMsgs += `סיסמא חייבת להכיל 20 תווים לכל היותר`;
            if (errorItem.context.label === "Email")
              errorMsgs += `אימייל חייב להכיל 100 תווים לכל היותר`;
            break;
          default:
            errorMsgs += "משהו השתבש";
            break;
        }
        toast.error(errorMsgs);
        return;
      }
    }

    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1 className="login-title text-center">התחברות</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="text-center mt-5">
          <Form.Label>אימייל</Form.Label>
          <Form.Control
            type="text"
            placeholder="אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="text-center mt-3">
          <Form.Label>סיסמא</Form.Label>
          <Form.Control
            type="password"
            placeholder="סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          className="mt-4 login-btn m-0 w-100"
        >
          התחברות
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-center">
          <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
            יצירת חשבון חדש
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
