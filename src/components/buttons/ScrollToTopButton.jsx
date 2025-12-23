import { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={(e) => scrollToTop(e)}
      className={`animate__animated animate__fadeIn animate__slow shadow-2xl rounded-full fixed bg-primary hover:bg-primary_dark w-14 h-14 right-4 bottom-16 sm:bottom-24 sm:right-6 z-10 grid place-content-center border-l-4 border-t-4 border-l-secondary border-t-secondary_light text-light ${
        visible ? 'block' : 'hidden'
      }`}>
      <HiOutlineChevronDoubleUp className="text-light" size={20} />
    </button>
  );
};

export default ScrollToTopButton;
