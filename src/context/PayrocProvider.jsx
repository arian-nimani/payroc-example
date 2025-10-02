import React, { useCallback, useEffect, useRef, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { achStyles, cardStyles } from "../transactions/lib/styles";

import { PayrocPaymentContext } from "./PayrocContext";
import {
  cardFields,
  cardWrapperMap,
  achFields,
  achWrapperMap,
} from "../transactions/lib/fields";
import { getPayrocSessionToken } from "../api/Api";

const parentOrigin = (() => {
  try {
    return new URL(document.referrer).origin || "*";
  } catch {
    return "*";
  }
})();

export const PayrocPaymentProvider = ({ children, method, handlePayment }) => {
  const payrocInstanceRef = useRef(null);
  const [fieldFormACH, setHostedFieldsFormACH] = useState(null);
  const [fieldFormCard, setHostedFieldsFormCard] = useState(null);

  const {
    data,
    isLoading: isQueryLoading,
    isError,
    refetch: retryInitialization,
  } = useQuery({
    queryKey: ["payroc-session-token", method],
    queryFn: async () => {
      const res = await getPayrocSessionToken();
      if (!res?.token || res?.error) throw res.error;
      return res;
    },
    staleTime: 1000 * 60 * 60,
    enabled: method === "online" || method === "ach",
    retryOnMount: false,
    retry: false,
  });

  const initializeForm = useCallback(async (formFields, wrapperMap) => {
    const instance = new window.Payroc.hostedFields(formFields);

    await instance.initialize();

    instance.on("submissionSuccess", async (data) => {
      await handlePayment(data);
      window.parent.postMessage({ type: "payrocSuccess", data }, parentOrigin);
    });

    instance.on("error", (err) => {
      window.parent.postMessage(
        { type: "payrocError", error: err },
        parentOrigin
      );
    });

    instance.on("fieldValidityChange", ({ field, validationError }) => {
      const element = document.querySelector(wrapperMap[field]);
      if (element) {
        if (validationError) {
          element.classList.add("has-error");
          return;
        }
        element.classList.remove("has-error");
      }
    });

    payrocInstanceRef.current = instance;

    return instance;
  }, []);

  const initCardForm = useCallback(async () => {
    if (fieldFormCard || !data?.token) return;
    const formFields = {
      sessionToken: data.token,
      mode: "payment",
      fields: { card: cardFields },
      styles: cardStyles,
      onPreSubmit: async () => true,
    };

    const hostedFieldsFormCard = await initializeForm(
      formFields,
      cardWrapperMap
    );

    setHostedFieldsFormCard(hostedFieldsFormCard);
  }, [data?.token, initializeForm, fieldFormCard]);

  const initACHForm = useCallback(async () => {
    if (fieldFormACH || !data?.token) return;
    const formFields = {
      sessionToken: data.token,
      mode: "payment",
      fields: { ach: achFields },
      styles: achStyles,
      onPreSubmit: async () => true,
    };

    const hostedFieldsFormACH = await initializeForm(formFields, achWrapperMap);

    setHostedFieldsFormACH(hostedFieldsFormACH);
  }, [data?.token, initializeForm, fieldFormACH]);

  useEffect(() => {
    if (isQueryLoading || isError) return;
    if (method === "ach") {
      initACHForm();
    } else if (method === "online") {
      initCardForm();
    }
  }, [initACHForm, initCardForm, isQueryLoading, isError, method]);

  const handlePayrocPayment = async () => {
    //THIS SHOULD TRIGGER THE PAYROC FRAMEWORK TO SUBMIT THE PAYMENT
    await payrocInstanceRef.current.submit();
  };

  return (
    <PayrocPaymentContext.Provider
      value={{
        payrocInstanceRef,
        initCardForm,
        initACHForm,
        isLoading: isQueryLoading || isError,
        retryInitialization,
        isError,
        handlePayrocPayment,
      }}
    >
      {children}
    </PayrocPaymentContext.Provider>
  );
};
