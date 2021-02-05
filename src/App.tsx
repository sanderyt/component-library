import React, { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1>Welcome to my Component Library</h1>
      <Modal closeHandler={toggleModal} isOpen={isOpen} title="My first modal">
        This is the modal component
      </Modal>
      <button onClick={toggleModal}>Open modal</button>
    </div>
  );
}

export default App;
