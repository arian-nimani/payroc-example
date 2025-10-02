import ReactModal from "react-modal";

export const Modal = ({ isOpen, title, onClose, onSave, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      ariaHideApp={false}
    >
      <div>{children}</div>
      <div
        data-dd-privacy="allow"
        className="flex justify-end w-full gap-2 p-2"
      >
        <button
          onClick={onClose}
          className="bg-black p-2 h-10 rounded-md text-white"
        >
          Close
        </button>
        <button
          onClick={onSave}
          className="bg-green-500 p-2 h-10 rounded-md text-white"
        >
          Pay
        </button>
      </div>
    </ReactModal>
  );
};
