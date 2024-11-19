"use client";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

const UseModal = ({ children, title }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Button
        title={"Crear Sala"}
        onClick={() => {
          setModalOpen(true);
        }}
      ></Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={title}>
        {children}
      </Modal>
    </div>
  );
};

export default UseModal;
