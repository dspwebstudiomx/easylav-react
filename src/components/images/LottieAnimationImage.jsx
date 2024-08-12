import Lottie from 'lottie-react'
import PropTypes from 'prop-types'

const LottieAnimationImage = ({ lottieImage }) => {
  return (
    <Lottie
      animationData={lottieImage} // reemplaza con la ruta a tu archivo Lottie
      loop={true}
      autoplay={true}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
LottieAnimationImage.propTypes = {
  lottieImage: PropTypes.object.isRequired,
}

export default LottieAnimationImage