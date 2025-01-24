
import { FaRegEnvelope } from 'react-icons/fa6';


const SubmitButton = () => {
  return (
    <button type='submit' className='flex gap-2 justify-center items-center text-light text-xl bg-secondary_dark rounded w-full px-6 py-4 sm:px-3 sm:py-4'>
      <span>
        <FaRegEnvelope />
      </span>
      <span>Enviar mensaje</span>
    </button>
  );
};
export default SubmitButton;

