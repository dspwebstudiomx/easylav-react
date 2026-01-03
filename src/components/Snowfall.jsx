import { useEffect, useState } from 'react';
import './Snowfall.css';

const Snowfall = () => {
  const [isHolidaySeason, setIsHolidaySeason] = useState(false);

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startHoliday = new Date(currentYear, 11, 15); // 15 de diciembre
    const endHoliday = new Date(currentYear + 1, 0, 7); // 7 de enero del siguiente año

    if (today >= startHoliday || today <= endHoliday) {
      setIsHolidaySeason(true);
    } else {
      setIsHolidaySeason(false);
    }
  }, []);

  useEffect(() => {
    if (!isHolidaySeason) return;

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Entre 2 y 5 segundos
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

      snowflake.innerText = '❄';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000); // Duración de la animación + tiempo extra
    };

    const interval = setInterval(createSnowflake, 200);
    return () => clearInterval(interval);
  }, [isHolidaySeason]);

  if (!isHolidaySeason) return null;

  return null;
};

export default Snowfall;
