import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`animate__animated animate__fadeIn animate__slow shadow-2xl rounded-xl fixed bg-primary w-20 h-20 right-10 bottom-10 z-50 grid place-content-center border-l-4 border-t-4 border-l-primary_dark border-t-primary_light ${visible ? 'block' : 'hidden'
        }`}
    >
      <FaArrowUp className='text-primary_light' size={32} />
    </button>
  );
};

export default ScrollToTopButton;