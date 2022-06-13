import React, { useState } from "react";
import Modal from "react-modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <button onClick={openModal}>modal</button>
      <Modal isOpen={modal}>
        <button onClick={closeModal}>close</button>
        <h1>Hello World</h1>
      </Modal>
    </>
  );
};
export default App;
