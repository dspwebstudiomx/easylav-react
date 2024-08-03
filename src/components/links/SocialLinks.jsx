
import PropTypes from 'prop-types';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import SocialLink from '../links/SocialLink';

const classes = {
  Link: 'text-blue-900  hover:scale-110 dark:text-blue-500 text-xl ',
}

const SocialLinks = ({ color, size, circleBorder, gap, hover, position }) => {
  return (
    <div className={`flex ${gap} ${position}`}>
      <SocialLink
        href={'https://www.facebook.com/easylavmx'}
        icono={<FiFacebook size={size} className={classes.Link} />}
        ariaLabel={'Accede a mi  cuenta de Facebook'}
        title={'Visita mi página en Facebook'}
        color={color}
        circleBorder={circleBorder}
        hover={hover}
      />
      <SocialLink
        href={'https://www.instagram.com/easylavmx'}
        icono={<FaInstagram size={size} className={classes.Link} />}
        ariaLabel={'Accede a mi  cuenta de Instagram'}
        title="Visita mi perfil de Instagram"
        color={color}
        circleBorder={circleBorder}
        hover={hover}
      />
      <SocialLink
        href={'mailto:contacto@easylav.mx'}
        icono={<FaRegEnvelope size={size = size + 1} className={classes.Link} />}
        ariaLabel={'Envia un correo electrónico para contactarme'}
        title="Envía un Correo Electrónico"
        color={color}
        circleBorder={circleBorder}
        hover={hover}
      />

    </div>
  )
}
SocialLinks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  circleBorder: PropTypes.string,
  position: PropTypes.string,
  gap: PropTypes.string,
  hover: PropTypes.string
}

export default SocialLinks