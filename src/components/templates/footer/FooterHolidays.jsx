import { useEffect, useState } from 'react';
import snowboy from '../../../assets/images/snowboy.png';

const FooterHolidays = () => {
  const [isHolidaySeason, setIsHolidaySeason] = useState(false);

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startHoliday = new Date(currentYear, 11, 15); // December 15
    const endHoliday = new Date(currentYear, 0, 7); // January 7

    if (today >= startHoliday && today <= endHoliday) {
      setIsHolidaySeason(true);
    } else {
      setIsHolidaySeason(false);
    }
  }, []);

  if (!isHolidaySeason) return null;

  return (
    <div
      id="greetings"
      className="absolute bg-gradient-to-b from-white to-secondary_dark h-20 w-full flex flex-col items-center justify-center">
      <p className="w-2/3  md:w-full flex md:items-center md:justify-center md:text-xl uppercase font-semibold text-secondary_dark">
        Felices Fiestas les desea la familia EasyLav®
      </p>
      <div className="absolute bottom-[62px] md:bottom-[54px] right-20 md:right-24 rounded-b-xl overflow-hidden">
        <img src={snowboy} alt="Snowboy" className="h-[100px] md:h-[120px] rounded-b-md overflow-hidden" />
      </div>
    </div>
  );
};

export default FooterHolidays;
