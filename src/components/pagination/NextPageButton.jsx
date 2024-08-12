import PropTypes from 'prop-types'
import { BiChevronRightCircle } from 'react-icons/bi'

const NextPageButton = ({ handleNextPage }) => {
  return (
    <button onClick={handleNextPage}>
      <BiChevronRightCircle
        className="ml-2 text-primary hover:text-primary_dark"
        size={65}
      />
    </button>
  )
}
NextPageButton.propTypes = {
  handleNextPage: PropTypes.func.isRequired,
}

export default NextPageButton