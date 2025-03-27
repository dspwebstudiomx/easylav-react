/*
  Accordion - Component
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
*/

// Importaciones
import { GENERAL_UI } from 'constants/constants';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Estructura
const Accordion = ({ description, title, height }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };

  const styles = {
    width: 'w-[80svw] lg:w-[310px] h-[140px]',
  }

  return (
    <div className='w-auto rounded-lg'>
      <button
        className={`flex text-left ${styles.width} ${height} p-8 bg-light text-dark items-center justify-start ${!active ? 'rounded-2xl border-2 border-primary' : 'rounded-t-2xl border-t-2 border-l-2 border-t-primary border-l-primary'} border-r-2 border-r-primary mx-auto`}
        onClick={() => handleToggle()}
      >
        {/*  svg icon */}
        <div className={`mr-2 flex w-full max-w-[50px] items-center justify-center text-primary`}>
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? 'rotate-180' : ''
              }`}
            width='17'
            height='10'
            viewBox='0 0 17 10'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
              fill=''
              stroke=''
            />
          </svg>
        </div>
        {/*  svg icon */}

        {/* title */}
        <h4 className='text-lg xl:text-lg font-semibold text-dark dark:text-white'>
          {title}
        </h4>
        {/* title */}

      </button>

      <div className={`${styles.width} pl-8 duration-200 ease-in-out bg-primary_light  text-dark ${active ? 'block rounded-b-2xl border-l-2 border-l-primary border-b-2 border-b-primary border-r-2 border-r-primary mx-auto h-[360px]  md:h-[380px]  lg:h-[340px] pb-8' : 'hidden'}`}
      >
        <p className={`${GENERAL_UI.PARAGRAPH} pt-8  dark:text-dark-6 w-full px-8 pb-4`}>
          {description}
        </p>
      </div>
    </div>
  );
};
Accordion.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  description: PropTypes.string,
}
export default Accordion
