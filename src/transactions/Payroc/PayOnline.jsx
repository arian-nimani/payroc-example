import React from "react";

import PayrocOnlinePayment from "./frames/PayrocOnlinePayment";

import PaymentAccordion from "../components/PaymentAccordion";

const PayOnline = ({ isOpen, onToggle }) => {
  return (
    <PaymentAccordion
      title="Pay online"
      icon="pos-mono"
      isOpen={isOpen}
      onToggle={onToggle}
      caption="Enter card info to pay online"
    >
      <PayrocOnlinePayment />
    </PaymentAccordion>
  );
};

export default PayOnline;
