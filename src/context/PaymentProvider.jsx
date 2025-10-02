import { useMemo, useCallback } from "react";

import { useFormik } from "formik";

import { PayrocPaymentProvider } from "./PayrocProvider";

import { paymentMethodApiPayroc } from "../transactions/lib/paymentProviders";
import { useMutation } from "@tanstack/react-query";
import { PaymentContext, PaymentContextApi } from "./PaymentContext";

const getMutationFn = (provider, method) => {
  if (!method) return null;

  const providerMethodsApiMap = {
    payroc: paymentMethodApiPayroc,
  };

  return providerMethodsApiMap[provider]?.[method] ?? null;
};

export const PaymentContextProvider = ({ children, patientId }) => {
  const practiceId = 8;

  const formik = useFormik({
    initialValues: {
      amount: 1000,
      method: "cash",
      methodDetail: null,
      invoices: [],
      appointmentId: null,
      surchargeAmount: 0,
      terminalId: null,
      processingTerminalId: null,
      patientId,
      payerId: null,
      invoiceToken: null,
      saveCard: false,
      paymentType: null,
    },
  });

  const provider = "payroc";

  const processPayment = getMutationFn(provider, formik.values.method);

  const { mutateAsync, isCharging } = useMutation({
    mutationFn: (params) => processPayment(params),
    successMessage: "Payment successful.",
    errorMessage: "Error processing payment. Please try again later.",
  });

  const handlePayment = useCallback(
    async (data) => {
      if (!processPayment) return;
      const finalValues = Object.fromEntries(
        Object.entries(formik.values).filter(
          // eslint-disable-next-line no-unused-vars
          ([_, v]) => v !== undefined && v !== null
        )
      );
      await mutateAsync({
        token: data?.token,
        ...finalValues,
        practiceId,
      });
    },
    [processPayment, mutateAsync, formik.values, practiceId]
  );

  const togglePaymentMethod = useCallback((key) => {
    const isSameMethod = formik.values.method === key;
    formik.setFieldValue("method", isSameMethod ? null : key);
    formik.setFieldValue("methodDetail", null);
  }, []);

  const isLoading = isCharging;
  const isDisabled =
    !formik.values.method ||
    isLoading ||
    !processPayment ||
    formik.values.amount <= 0;

  const disabledTooltip =
    (formik.values.amount <= 0 && "Amount must be greater than 0") ||
    (!formik.values.method && "Please select a payment method") ||
    (!processPayment && "Payment method not supported") ||
    (isLoading && "Processing payment...") ||
    "";

  const contextValue = useMemo(
    () => ({
      values: formik.values,
      isLoading,
      isDisabled,
      disabledTooltip,
      provider,
    }),
    [formik.values, isLoading, isDisabled, disabledTooltip, provider]
  );

  const contextApi = useMemo(
    () => ({
      togglePaymentMethod,
      setFieldValue: formik.setFieldValue,
      handlePayment,
    }),
    [togglePaymentMethod, formik.setFieldValue, handlePayment]
  );

  return (
    <PaymentContext.Provider value={contextValue}>
      <PaymentContextApi.Provider value={contextApi}>
        {provider === "payroc" ? (
          <PayrocPaymentProvider
            method={contextValue.values.method}
            handlePayment={handlePayment}
          >
            {children}
          </PayrocPaymentProvider>
        ) : (
          children
        )}
      </PaymentContextApi.Provider>
    </PaymentContext.Provider>
  );
};
