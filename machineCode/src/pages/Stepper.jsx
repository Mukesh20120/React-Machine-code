import React, { Component } from "react";
import CheckOutStepper from "../components/CheckOutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];

function Stepper() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CheckOut Stepper</h1>
      <CheckOutStepper stepperData={CHECKOUT_STEPS} />
    </div>
  );
}

export default Stepper;
