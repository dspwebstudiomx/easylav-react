
import { FaRegEnvelope } from 'react-icons/fa6';


const SubmitButton = () => {
  return (
    <button type='submit' className='flex gap-2 justify-center items-center text-light text-base bg-secondary_dark rounded w-full px-8 py-4 uppercase font-semibold'>
      <span>
        <FaRegEnvelope />
      </span>
      <span>Enviar mensaje</span>
    </button>
  );
};
export default SubmitButton;

