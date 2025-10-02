import { createContext, useContext } from "react";

export const PayrocPaymentContext = createContext(undefined);

export const usePayrocPayment = (ref) => {
  const ctx = useContext(PayrocPaymentContext);
  if (!ctx) throw new Error("usePayment must be used inside PaymentProvider");
  return { ...ctx, ref };
};
