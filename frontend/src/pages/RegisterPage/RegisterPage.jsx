import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { register } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer/FormContainer";
import registerSchema from "../../validation/register.validation";
import validate from "../../validation/validation";
import { toast } from "react-toastify";

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    const error = validate({ name, email, password }, registerSchema);
    if (error.error) {
      let errorMsgs = "";
      for (let errorItem of error.error.details) {
        switch (errorItem.type) {
          case "string.min":
            if (errorItem.context.label === "Name")
              errorMsgs += `שם חייב להכיל לפחות 2 תווים`;
            if (errorItem.context.label === "Password")
              errorMsgs += `סיסמא חייבת להכיל לפחות 6 תווים`;
            if (errorItem.context.label === "Email")
              errorMsgs += `אימייל חייב להכיל לפחות 6 תווים`;
            break;
          case "string.max":
            if (errorItem.context.label === "Name")
              errorMsgs += `שם חייב להכיל 50 תווים לכל היותר `;
            if (errorItem.context.label === "Password")
              errorMsgs += `שם חייב להכיל 20 תווים לכל היותר `;
            if (errorItem.context.label === "Email")
              errorMsgs += `שם חייב להכיל 100 תווים לכל היותר `;
            break;
          default:
            errorMsgs += "משהו השתבש";
            break;
        }
        toast.error(errorMsgs, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    }
    if (password !== confirmPassword) {
      setMessage("סיסמא לא תואמת");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1 className="text-center">הרשמה</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label className="text-center">שם</Form.Label>
          <Form.Control
            type="name"
            placeholder="ישראל ישראלי"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>אימייל</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>סיסמא</Form.Label>
          <Form.Control
            type="password"
            placeholder="סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>אישור סיסמא</Form.Label>
          <Form.Control
            type="password"
            placeholder="אישור סיסמא"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="mt-4 w-100 text-center"
        >
          הרשמה
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-center">
          משתמש קיים? &nbsp;
          <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
            לחץ כאן
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
