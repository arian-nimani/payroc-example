export const cardFields = {
  cardholderName: {
    target: ".card-holder-name",
    errorTarget: ".card-holder-name-error",
    placeholder: "Cardholder Name",
  },
  cardNumber: {
    target: ".card-number",
    errorTarget: ".card-number-error",
    placeholder: "•••• •••• •••• ••••",
  },
  cvv: {
    wrapperTarget: ".card-cvv-wrapper",
    target: ".card-cvv",
    errorTarget: ".card-cvv-error",
    placeholder: "CVV",
  },
  expiryDate: {
    target: ".card-expiry",
    errorTarget: ".card-expiry-error",
    placeholder: "MM/YY",
  },
  submit: {
    target: ".payroc-card-submit-button",
    value: "Pay Now",
  },
};

export const cardWrapperMap = {
  cardNumber: ".card-number-wrapper",
  cardholderName: ".card-holder-name-wrapper",
  expiryDate: ".card-expiry-wrapper",
  cvv: ".card-cvv-wrapper",
};

export const achFields = {
  nameOnAccount: {
    target: ".ach-account-holder",
    errorTarget: ".ach-account-holder-error",
    placeholder: "Account Holder Name",
  },
  accountType: {
    target: ".ach-account-type",
    errorTarget: ".ach-account-type-error",
  },
  achAccountNumber: {
    target: ".ach-account-number",
    errorTarget: ".ach-account-number-error",
    placeholder: "Account Number",
  },
  routingNumber: {
    target: ".ach-routing-number",
    errorTarget: ".ach-routing-number-error",
    placeholder: "Routing Number",
  },
  submit: {
    target: ".payroc-ach-submit-button",
    value: "Pay Now",
  },
};

export const achWrapperMap = {
  nameOnAccount: ".ach-account-holder-wrapper",
  accountType: ".ach-account-type-wrapper",
  achAccountNumber: ".ach-account-number-wrapper",
  routingNumber: ".ach-routing-number-wrapper",
};
