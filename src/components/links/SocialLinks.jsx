import PropTypes from 'prop-types';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa6';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import SocialLink from '../links/SocialLink';

const classes = {
  Link: 'text-blue-900  hover:scale-110 dark:text-blue-500 text-xl ',
};

const SocialLinks = ({ color, size, circleBorder, gap, hover, position, onClick }) => {
  return (
    <ul className={`flex ${gap} ${position}`}>
      <SocialLink
        href={'https://www.facebook.com/profile.php?id=61562871132158'}
        icono={<FiFacebook size={size} className={classes.Link} />}
        ariaLabel={'Accede a mi  cuenta de Facebook'}
        title={'Visita mi página en Facebook'}
        color={color}
        circleBorder={circleBorder}
        hover={hover}
        onClick={onClick}
        alt="icono de facebook"
      />
      <SocialLink
        href={'https://www.instagram.com/lavanderiaseasylav/'}
        icono={<FaInstagram size={size} className={classes.Link} />}
        ariaLabel={'Accede a mi  cuenta de Instagram'}
        title="Visita mi perfil de Instagram"
        color={color}
        circleBorder={circleBorder}
        hover={hover}
        onClick={onClick}
        alt={'icono de instagram'}
      />
      <SocialLink
        href={'mailto:contacto@easylav.mx'}
        icono={<FaRegEnvelope size={(size = size + 1)} className={classes.Link} />}
        ariaLabel={'Envia un correo electrónico para contactarme'}
        title="Envía un Correo Electrónico"
        color={color}
        circleBorder={circleBorder}
        hover={hover}
        onClick={onClick}
        alt={'icono de correo'}
      />
      <SocialLink
        href={'tel:+524438947493'}
        icono={<FiPhone size={(size = size - 1)} className={classes.Link} />}
        ariaLabel={'Realiza una llamada'}
        title="Realiza una llamada"
        color={color}
        circleBorder={circleBorder}
        hover={hover}
        onClick={onClick}
        alt={'icono de teléfono'}
      />
    </ul>
  );
};
SocialLinks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  circleBorder: PropTypes.string,
  position: PropTypes.string,
  gap: PropTypes.string,
  hover: PropTypes.string,
  onClick: PropTypes.func,
};

export default SocialLinks;
