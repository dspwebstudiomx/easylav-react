//Importaciones
import { useShowModal } from "hooks";

// Custom Hook
const useHandleModalToggle = () => {
  const { showModal, setShowModal } = useShowModal();
  const handleModalToggle = () => {
    setShowModal(!showModal);
    document.body.style.overflow = !showModal && "hidden";
  };
  return { handleModalToggle };
};

export default useHandleModalToggle;
