import PropTypes from 'prop-types'

const Container = ({ id, children, className }) => {
  return (
    <div id={id} className={`${className} flex flex-col gap-24 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  mx-auto`}>
      {children}
    </div>
  )
}
Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Container