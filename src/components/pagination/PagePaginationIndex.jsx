import propTypes from 'prop-types'

const PagePaginationIndex = ({ localservices, itemsPerPage, currentPage, handlePageChange }) => {
  return (
    <div className="hidden sm:flex">
      {Array(Math.ceil(localservices.length / itemsPerPage))
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "mx-2 border-b-4 border-b-primary_dark text-2xl font-bold font-semibold hover:text-secondary_light text-dark dark:text-light"
                : "mx-2 text-2xl font-semibold hover:text-secondary_light text-dark dark:text-light"
            }
          >
            {index + 1}
          </button>
        ))}
    </div>
  )
}
PagePaginationIndex.propTypes = {
  localservices: propTypes.array.isRequired,
  itemsPerPage: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  handlePageChange: propTypes.func.isRequired
}

export default PagePaginationIndex