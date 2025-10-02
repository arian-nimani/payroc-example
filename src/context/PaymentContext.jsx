import { createContext, useContext } from "react";

export const PaymentContext = createContext();
export const PaymentContextApi = createContext();

export const usePaymentContext = () => useContext(PaymentContext);
export const usePaymentContextApi = () => useContext(PaymentContextApi);
