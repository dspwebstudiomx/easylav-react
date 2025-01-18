//Importaciones
import { useShowModal } from "hooks";
import { useEffect } from "react";

// Custom Hook

const useHandleModalToggle = () => {
  const { showModal, setShowModal } = useShowModal();
  useEffect(() => {
    setShowModal(!showModal);
    document.body.style.overflow = !showModal && "hidden";
    return { showModal, setShowModal };
  });
};

export default useHandleModalToggle;
