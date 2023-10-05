import React from "react";

interface AlertModalProps {
  message: string;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 top-0 z-50 flex h-screen w-screen items-start justify-center bg-black bg-opacity-50 pt-4">
      <div className="mx-4 w-96 rounded-md bg-white p-4 shadow-lg">
        <div className="mb-2 text-lg font-bold">Alert</div>
        <div className="mb-4">{message}</div>
        <button
          className="float-right rounded-full bg-secondary-500 px-12 py-2 text-white"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
