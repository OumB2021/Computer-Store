import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/savePaymentMethod";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatchEvent(savePaymentMethod(savePaymentMethods));
    navigate("/placeorder");
  };

  return <FormContainer></FormContainer>;
};

export default PaymentScreen;
