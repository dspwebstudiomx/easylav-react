import { useEffect, useState } from 'react';
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={e => scrollToTop(e)}
      className={`animate__animated animate__fadeIn animate__slow shadow-2xl rounded-full fixed bg-primary w-16 h-16 right-3 bottom-32h z-40 grid place-content-center border-l-4 border-t-4 border-l-primary_dark border-t-primary_light border-l-primary_dark ${visible ? 'block' : 'hidden'
        }`}
    >
      <HiOutlineChevronDoubleUp className='text-primary_light' size={28} />
    </button>
  );
};

export default ScrollToTopButton