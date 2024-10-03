
import { ButtonContainer } from 'components';
import { FaRegEnvelope } from 'react-icons/fa6';


const SubmitButton = () => {
  return (
    <ButtonContainer position={'justify-center items-center'}>
      <a href="">
        <button type='submit' className='flex gap-2 justify-center items-center text-light text-xl bg-secondary_dark py-4 px-6 rounded'>
          <span>
            <FaRegEnvelope />
          </span>
          <span>Enviar mensaje</span>
        </button>
      </a>
    </ButtonContainer>
  );
};
export default SubmitButton;

