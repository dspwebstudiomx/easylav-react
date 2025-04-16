import { IoHomeOutline } from 'react-icons/io5';
import { Button } from 'components';

const HomeButton = () => {
  return (
    <Button
      href="/"
      width="w-full"
      variant="secondary"
      className="uppercase font-semibold flex gap-2 justify-center items-center text-light text-base rounded w-full px-8 py-6"
      icon={<IoHomeOutline size={28} />}
      title=""
      onClick={() => window.scrollTo(0, 0)}
    />
  );
};

export default HomeButton;
