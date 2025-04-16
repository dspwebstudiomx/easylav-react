import { FaRegEnvelope } from 'react-icons/fa6';
import { Button } from 'components';

const SubmitButton = () => {
  return <Button type="submit" variant="secondary" icon={<FaRegEnvelope />} title="Enviar mensaje" />;
};

export default SubmitButton;
