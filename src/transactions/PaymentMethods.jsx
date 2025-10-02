import React from "react";

import Typography from "../components/Typography";

import {
  usePaymentContext,
  usePaymentContextApi,
} from "../context/PaymentContext";

import { providers } from "./lib/paymentProviders";

const PaymentMethods = ({ enabledMethods, ...props }) => {
  const { values, provider } = usePaymentContext();
  const { togglePaymentMethod } = usePaymentContextApi();

  const currentProvider = providers[provider];

  const allMethods = currentProvider.methodComponents;

  const filteredMethods = Array.isArray(enabledMethods)
    ? Object.entries(allMethods).filter(([key]) => enabledMethods.includes(key))
    : Object.entries(allMethods);

  return (
    <div className="flex flex-col gap-5 pt-2.5">
      <Typography variant="p" size="small" color="neutral-800" weight="medium">
        Payment Methods
      </Typography>

      <div className="flex flex-col gap-2">
        {filteredMethods.map(([key, Component]) => {
          const isOpen = values.method === key;

          return (
            <Component
              key={key}
              isOpen={isOpen}
              onToggle={() => togglePaymentMethod(key)}
              {...props}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethods;
