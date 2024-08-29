/* 
  PaginatedSucursalCards
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-26
*/

// Importaciones
import { Pager } from 'components';
import { localservices } from 'data';
import { useMediaQueries, usePagination } from 'hooks';
import PropTypes from 'prop-types';
import SucursalCard from './SucursalCard';

// Estructura
const PaginatedSucursalCards = () => {
  const { isMobile, isTablet, isDesktop, itemsPerPage } = useMediaQueries();

  const {
    paginatedData,
    handlePageChange,
    currentPage,
    handleNextPage,
    handlePrevPage
  } = usePagination(localservices, itemsPerPage);

  return (
    <>
      <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : isDesktop ? 'grid-cols-1' : 'grid-cols-1'} mx-auto mb-12 place-content-center gap-6 2xl:gap-0 justify-center`}      >
        <div className='flex'>
          {paginatedData.map((localservice) => (
            <SucursalCard
              key={localservice.id}
              title={localservice.title}
              gmap={localservice.gmap}
              position={localservice.position}
              place={localservice.place}
              serviceday1={localservice.serviceday1}
              servicehour1={localservice.servicehour1}
              ciudad={localservice.ciudad}
              email={localservice.email}
              width='w-[220px] 2xl:w-[240px] mx-auto'
              titleMailto={localservice.titleMailto}
              badge={localservice.badge}
              advertisement={localservice.advertisement}
            />
          ))}
        </div>
      </div>
      <Pager handleNextPage={handleNextPage} handlePageChange={handlePageChange} handlePrevPage={handlePrevPage} itemsPerPage={itemsPerPage} localservices={localservices}
        currentPage={currentPage} />
    </>
  );
};
PaginatedSucursalCards.propTypes = {
  handlePrevPage: PropTypes.func,
  handleNextPage: PropTypes.func
}
export default PaginatedSucursalCards;
