import React, {useState} from 'react'

function Modal({isModalOpen , setIsModalOpen, setAddress}) {
    const [newAddress ,setNewAddress] = useState("");
    if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-72 sm:w-80 md:w-96">
      <h2 className="text-lg font-semibold">Change Shipping Address</h2>
      <input
        type="text"
        placeholder="Enter new address"
        className="border w-full p-2 mt-2 rounded-md"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end space-x-3 mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => {
            if (newAddress.trim() !== "") {
              setAddress(newAddress); // Update address in Cart
              setIsModalOpen(false); // Close modal
            }
          }}
        >
          Save
        </button>
      </div>
    </div>
  </div>
);
};

export default Modal;