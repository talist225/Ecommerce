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
import { toast } from "react-hot-toast";
import PasswordRequirements from "../../components/PasswordRequirements/PasswordRequirements";
import "./registerPage.css";

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const [pwdRequest, setPwdRequest] = useState(true);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

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
              errorMsgs += `סיסמא חייבת להכיל לפחות 8 תווים`;
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
            errorMsgs += "יש למלא את כל הפרטים";
            break;
        }
        toast.error(errorMsgs);
        return;
      }
    }
    if (password !== confirmPassword) {
      toast.error("סיסמא לא תואמת");
    } else {
      dispatch(register(name, email, password));
    }
  };

  const handlePasswordStr = (e) => {
    setPassword(e.target.value);
  };

  const handleOnFocus = () => {
    setPwdRequest(true);
  };

  const handleOnBlur = () => {
    setPwdRequest(false);
  };

  const handleOnKeyUp = (e) => {
    if (e.key !== "Shift") {
      const { value } = e.target;
      const capsLetterCheck = /[A-Z]/.test(value);
      const numberCheck = /(?:\D*\d){4,}/.test(value);
      const pwdLengthCheck = value.length > 8;
      const specialCharCheck = /[!@#$%^&*_-]/.test(value);
      setChecks({
        capsLetterCheck,
        numberCheck,
        pwdLengthCheck,
        specialCharCheck,
      });
    }
  };

  const emailValidation = (e) => {
    setEmail(e.target.value);
    const regExp = /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regExp.test(email)) {
      setMessage("*תקין");
    } else if (email === "") {
      setMessage("*נא למלא אימייל");
    } else if (!regExp.test(email)) {
      setMessage("*אימייל לא תקין");
    } else {
      setMessage("");
    }
  };

  return (
    <FormContainer>
      <h1 className="text-center">הרשמה</h1>
      {/* {message && <Message variant="danger">{message}</Message>} */}
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
            onInput={emailValidation}
          ></Form.Control>
        </Form.Group>

        <p className="email-validation mt-2">
          &nbsp;
          {message}
        </p>

        <Form.Group controlId="password">
          <Form.Label>סיסמא</Form.Label>
          <Form.Control
            type="password"
            placeholder="סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onInput={handlePasswordStr}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
          ></Form.Control>
        </Form.Group>

        {pwdRequest ? (
          <PasswordRequirements
            capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
            numberFlag={checks.numberCheck ? "valid" : "invalid"}
            pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
            specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
          />
        ) : null}

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
