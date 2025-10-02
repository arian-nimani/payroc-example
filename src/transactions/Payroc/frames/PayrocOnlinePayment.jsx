import { usePayrocPayment } from "../../../context/PayrocContext";

import ErrorMessage from "./components/ErrorMessage";
import Label from "./components/Label";
import LoadingWrapper from "./components/LoadingWrapper";

import "./Payroc.css";

const PayrocOnlinePayment = () => {
  const { isLoading, retryInitialization, isError } = usePayrocPayment();

  return (
    <LoadingWrapper
      isLoading={isLoading}
      isError={isError}
      retry={retryInitialization}
    >
      <div className="card-container payroc-form flex h-full w-full flex-col items-center justify-center gap-6 p-1">
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="card-holder-name">Cardholder name</Label>
          <div className="card-holder-name-wrapper input-wrapper">
            <div
              className="card-holder-name w-full"
              id="card-holder-name"
            ></div>
          </div>
          <ErrorMessage className="card-holder-name-error"></ErrorMessage>
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="card-number">Card number</Label>
          <div className="input-wrapper card-number-wrapper">
            <div className="card-number w-full" id="card-number"></div>
          </div>
          <ErrorMessage className="card-number-error"></ErrorMessage>
        </div>
        <div className="flex w-full gap-3">
          <div className="flex w-full flex-col gap-1">
            <Label htmlFor="card-expiry">Expiration</Label>
            <div className="input-wrapper card-expiry-wrapper">
              <div className="card-expiry w-full" id="card-expiry"></div>
            </div>
            <ErrorMessage className="card-expiry-error"></ErrorMessage>
          </div>
          <div className="flex w-full flex-col gap-1">
            <Label htmlFor="card-cvv">CVC</Label>
            <div className="input-wrapper card-cvv-wrapper">
              <div className="card-cvv w-full" id="card-cvv"></div>
            </div>
            <ErrorMessage className="card-cvv-error"></ErrorMessage>
          </div>
        </div>
        <div className="card-submit payroc-card-submit-button hidden" />
      </div>
    </LoadingWrapper>
  );
};

export default PayrocOnlinePayment;
