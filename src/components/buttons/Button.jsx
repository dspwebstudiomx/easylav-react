import PropTypes from 'prop-types'

const Button = ({ themeButton, title, width, border, icon, type, onClick, href, height, titleMailto }) => {
  return (
    <a href={href}>
      <button onClick={onClick} type={type} className={`flex items-center justify-center ${themeButton} ${width} ${height} text-light  text-xl font-semibold rounded-xl ${border}`} title={titleMailto} >
        <span className='mr-3'>{icon}</span>
        {title}
      </button>
    </a>
  )
}
Button.propTypes = {
  themeButton: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string
}

export default Button