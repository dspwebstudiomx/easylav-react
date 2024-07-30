import { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleUp } from "react-icons/hi";


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
      className={`animate__animated animate__fadeIn animate__slow shadow-2xl rounded-full fixed bg-primary w-20 h-20 right-5 bottom-32 z-0 grid place-content-center border-l-4 border-t-4 border-l-primary_dark border-t-primary_light hover:bg-primary_dark hover:border-l-primary ${visible ? 'block' : 'hidden'
        }`}
    >
      <HiOutlineChevronDoubleUp className='text-primary_light' size={38} />
    </button>
  );
};

export default ScrollToTopButton;