import PropTypes from 'prop-types'

const SocialLink = ({ href, icono, ariaLabel, title, color, size, circleBorder, hover }) => {
  return (
    <li className={`list-none ${color}`}>
      <a className={`${color} ${size} ${circleBorder} ${hover} text-xl font-semibold flex gap-2 place-items-center`} href={href} target="blank" rel="noopener noreferrer" aria-label={ariaLabel} title={title}>
        {icono}
      </a>
    </li>
  )
}
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  circleBorder: PropTypes.string,
  hover: PropTypes.string,
  icono: PropTypes.object,
}

export default SocialLink