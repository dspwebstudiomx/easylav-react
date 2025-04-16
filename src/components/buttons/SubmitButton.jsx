import { FaRegEnvelope } from 'react-icons/fa6';
import { Button } from 'components';

const SubmitButton = () => {
  return (
    <Button
      type="submit"
      variant="secondary"
      className="uppercase font-semibold flex gap-2 justify-center items-center text-light text-base rounded w-full px-8 py-6"
      icon={<FaRegEnvelope size={28} />}
      title="Enviar mensaje"
      aria-label="Enviar mensaje"
    />
  );
};

export default SubmitButton;
