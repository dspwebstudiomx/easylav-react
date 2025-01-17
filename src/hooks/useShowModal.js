import { useEffect, useState } from 'react';

const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-active');
      document.body.style.overflow = 'hidden'; // Add this line to prevent scrolling
    } else {
      document.body.classList.remove('modal-active');
      document.body.style.overflow = 'unset'; // Reset the overflow style
    }
  }, [showModal]);

  return { showModal, setShowModal }
}
export default useShowModal