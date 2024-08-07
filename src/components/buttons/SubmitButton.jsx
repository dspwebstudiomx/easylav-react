
import { ButtonContainer, ButtonSecondary } from 'components';
import { FaRegEnvelope } from 'react-icons/fa6';


const SubmitButton = () => {
  return (
    <ButtonContainer position={'justify-center'}>
      <ButtonSecondary
        title={'Enviar mensaje'}
        icon={<FaRegEnvelope />}
        type={'submit'}
        width={'w-[240px]'}
      />
    </ButtonContainer>
  );
};
export default SubmitButton;

