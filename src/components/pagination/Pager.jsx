import { NextPageButton, PagePaginationIndex, PrevPageButton } from 'components'
import PropTypes from 'prop-types'

const Pager = ({ handleNextPage, handlePrevPage, handlePageChange, itemsPerPage, localservices, currentPage }) => {
  return (
    <div className="mx-auto flex items-center justify-center gap-7">
      <PrevPageButton handlePrevPage={handlePrevPage} />
      <PagePaginationIndex handlePageChange={handlePageChange} itemsPerPage={itemsPerPage} localservices={localservices} currentPage={currentPage} />
      <NextPageButton handleNextPage={handleNextPage} />
    </div>
  )
}
Pager.propTypes = {
  handleNextPage: PropTypes.func,
  handlePrevPage: PropTypes.func,
  handlePageChange: PropTypes.func,
  itemsPerPage: PropTypes.number,
  localservices: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number
}
export default Pager