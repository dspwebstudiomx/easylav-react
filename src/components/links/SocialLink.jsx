import PropTypes from 'prop-types';

const SocialLink = ({ href, icono, ariaLabel, title, color, size, circleBorder, hover, onClick, alt }) => {
  return (
    <li className={`list-none ${color}`} onClick={onClick}>
      <a
        className={`${color} ${size} ${circleBorder} ${hover} text-xl font-semibold flex gap-2 place-items-center`}
        href={href}
        target="blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={title}
        alt={alt}>
        {icono}
      </a>
    </li>
  );
};
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  circleBorder: PropTypes.string,
  hover: PropTypes.string,
  icono: PropTypes.object,
  onClick: PropTypes.func,
};

export default SocialLink;
