import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer/FormContainer";
import { savePaymentMethod } from "../../actions/cartActions";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import { toast } from "react-hot-toast";
import "./paymentPage.css";

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
    toast.success(`${paymentMethod} נבחר כאמצעי תשלום`);
  };

  return (
    <div className="payment">
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h2 className="w-100">אמצעי תשלום</h2>
        <Form onSubmit={submitHandler} className="w-100">
          <Form.Group>
            <Form.Label as="legend">בחר/י אמצעי תשלום</Form.Label>

            <Col>
              <Form.Check
                type="radio"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <label className="ml-5">
                &nbsp;&nbsp;&nbsp;&nbsp;אשראי או PayPal{" "}
              </label>
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
    </div>
  );
};

export default PaymentPage;
