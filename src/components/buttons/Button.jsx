import PropTypes from 'prop-types'

const Button = ({ themeButton, title, width, border, icon, type, onClick, href }) => {
  return (
    <button onClick={onClick} type={type} className={`flex items-center justify-center ${themeButton} ${width} h-[80px] md:h-[80px] text-light  text-xl font-semibold rounded-xl ${border}`}>
      <a href={href}>
        <span className='mr-3'>{icon}</span>
        {title}
      </a>
    </button>
  )
}
Button.propTypes = {
  themeButton: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button