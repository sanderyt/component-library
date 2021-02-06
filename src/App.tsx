import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1>Welcome to my Component Library</h1>
      <h2>Buttons</h2>
      <Button clickHandler={() => {}} isPrimary>
        Primary
      </Button>
      <Button clickHandler={() => {}} isSecondary>
        Secondary
      </Button>
      <Button clickHandler={() => {}} isDelete>
        Delete
      </Button>
      <h2>Modal</h2>
      <Button clickHandler={toggleModal} isPrimary>
        Open modal
      </Button>
      <Modal closeHandler={toggleModal} isOpen={isOpen} title="My first modal">
        This is the modal component
        <Button clickHandler={() => {}} isPrimary>
          Save
        </Button>
      </Modal>
    </div>
  );
}

export default App;
