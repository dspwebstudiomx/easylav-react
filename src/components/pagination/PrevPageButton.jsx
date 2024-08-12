import PropTypes from 'prop-types'
import { BiChevronLeftCircle } from 'react-icons/bi'

const PrevPageButton = ({ handlePrevPage }) => {
  return (
    <button onClick={handlePrevPage}>
      <BiChevronLeftCircle
        className="mr-2 text-primary hover:text-primary_dark"
        size={65}
      />
    </button>
  )
}
PrevPageButton.propTypes = {
  handlePrevPage: PropTypes.func.isRequired,
}
export default PrevPageButton