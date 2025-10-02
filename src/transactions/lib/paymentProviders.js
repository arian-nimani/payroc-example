import PayOnline from "../Payroc/PayOnline";
import PayWithAch from "../Payroc/PayWithAch";

export const providers = {
  payroc: {
    methodComponents: {
      online: PayOnline,
      ach: PayWithAch,
    },
  },
};

export const paymentMethodApiPayroc = {
  ach: () => () => {
    console.log("ach");
  },
  online: () => () => {
    console.log("online");
  },
};
