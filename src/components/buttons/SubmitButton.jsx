
import { FaRegEnvelope } from 'react-icons/fa6';


const SubmitButton = () => {
  return (
    <button type='submit' className='flex gap-2 justify-center items-center text-light text-xl bg-secondary_dark py-8 px-6 rounded w-full'>
      <span>
        <FaRegEnvelope />
      </span>
      <span>Enviar mensaje</span>
    </button>
  );
};
export default SubmitButton;

