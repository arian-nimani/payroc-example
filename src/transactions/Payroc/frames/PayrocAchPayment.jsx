import { usePayrocPayment } from "../../../context/PayrocContext";

import ErrorMessage from "./components/ErrorMessage";
import Label from "./components/Label";
import LoadingWrapper from "./components/LoadingWrapper";

import "./Payroc.css";

const PayrocAchPayment = () => {
  const { isLoading, retryInitialization, isError } = usePayrocPayment();

  return (
    <LoadingWrapper
      isLoading={isLoading}
      isError={isError}
      retry={retryInitialization}
    >
      <div className="ach-container payroc-form flex h-full w-full flex-col items-center justify-center gap-6 p-1">
        <div
          className="hosted-fields-message-container"
          id="hosted-fields-message-container"
        ></div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="ach-account-holder">Account Holder Name</Label>
          <div className="input-wrapper ach-account-holder-wrapper">
            <div className="ach-account-holder w-full"></div>
          </div>
          <ErrorMessage className="ach-account-holder-error"></ErrorMessage>
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="ach-account-type">Account Type</Label>
          <div className="input-type-wrapper ach-account-type-wrapper">
            <div className="ach-account-type w-full"></div>
          </div>
          <ErrorMessage className="ach-account-type-error"></ErrorMessage>
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="ach-account-number">Account Number</Label>
          <div className="input-wrapper ach-account-number-wrapper">
            <div className="ach-account-number w-full"></div>
          </div>
          <ErrorMessage className="ach-account-number-error"></ErrorMessage>
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="ach-routing-number">Routing Number</Label>
          <div className="input-wrapper ach-routing-number-wrapper">
            <div className="ach-routing-number w-full"></div>
          </div>
          <ErrorMessage className="ach-routing-number-error"></ErrorMessage>
        </div>
        <div className="ach-submit payroc-ach-submit-button hidden" />
      </div>
    </LoadingWrapper>
  );
};

export default PayrocAchPayment;
