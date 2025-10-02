import { useState } from "react";
import { Modal } from "./components/Modal";
import PaymentMethods from "./transactions/PaymentMethods";
import { usePayrocPayment } from "./context/PayrocContext";
import PayrocOnlinePayment from "./transactions/Payroc/frames/PayrocOnlinePayment";
import PayrocAchPayment from "./transactions/Payroc/frames/PayrocAchPayment";
import {
  usePaymentContext,
  usePaymentContextApi,
} from "./context/PaymentContext";

const PaymentModal = ({ isOpen, setIsOpen }) => {
  const { handlePayrocPayment } = usePayrocPayment();
  const { togglePaymentMethod } = usePaymentContextApi();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        togglePaymentMethod("cash");
      }}
      onSave={async () => {
        await handlePayrocPayment();
        setIsOpen(false);
      }}
    >
      <PaymentMethods />
    </Modal>
  );
};

const AlternativePaymentModal = ({ isOpen, setIsOpen }) => {
  const { handlePayrocPayment } = usePayrocPayment();
  const { values } = usePaymentContext();
  const { togglePaymentMethod } = usePaymentContextApi();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        togglePaymentMethod("cash");
      }}
      onSave={async () => {
        await handlePayrocPayment();
        setIsOpen(false);
      }}
    >
      <select
        value={values.method}
        onChange={(e) => togglePaymentMethod(e.target.value)}
        className="block w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        <option value="cash">Cash</option>
        <option value="online">Card</option>
        <option value="ach">ACH</option>
      </select>

      {values.method === "online" && <PayrocOnlinePayment />}
      {values.method === "ach" && <PayrocAchPayment />}
    </Modal>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondary, setIsOpenSecondary] = useState(false);
  const [isOpenTertiary, setIsOpenTertiary] = useState(false);

  return (
    <div>
      <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <PaymentModal isOpen={isOpenSecondary} setIsOpen={setIsOpenSecondary} />
      <AlternativePaymentModal
        isOpen={isOpenTertiary}
        setIsOpen={setIsOpenTertiary}
      />

      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Open Primary
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded-md"
          onClick={() => setIsOpenSecondary(true)}
        >
          Open Secondary
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={() => setIsOpenTertiary(true)}
        >
          Open Tertiary
        </button>
      </div>
    </div>
  );
}
