import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer/FormContainer";
import { savePaymentMethod } from "../../actions/cartActions";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h2>אמצעי תשלום</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">בחר/י אמצעי תשלום</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal או כרטיס אשראי"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            {/* 
            //! Another payment method in the future
            <Form.Check
              type="radio"
              label="BIT"
              id="BIT"
              name="paymentMethod"
              value="BIT"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-4">
          המשך לתשלום
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentPage;
