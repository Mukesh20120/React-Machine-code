import React from 'react';
import { Modal } from './Modal';
import { useModal } from './useModal';



function ModalComponent() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="h-screen bg-red-300">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Hello from the Modal!</h2>
        <p className="mb-4">This is a custom modal using React Portal and Tailwind CSS.</p>
        <button
          onClick={closeModal}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ModalComponent;
