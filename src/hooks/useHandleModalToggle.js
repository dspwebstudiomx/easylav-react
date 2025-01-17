//Importaciones
import { useState } from "react";

// Custom Hook
const useHandleModalToggle = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    document.body.style.overflow = !showModal && "hidden";
  };
  return { handleModalToggle };
};

export default useHandleModalToggle;
