import React from "react";

import PayrocAchPayment from "./frames/PayrocAchPayment";

import PaymentAccordion from "../components/PaymentAccordion";

const PayWithAch = ({ isOpen, onToggle }) => {
  return (
    <PaymentAccordion
      title="ACH"
      icon="building-mono"
      isOpen={isOpen}
      onToggle={onToggle}
      caption="Enter your account and routing details"
    >
      <PayrocAchPayment />
    </PaymentAccordion>
  );
};

export default PayWithAch;
