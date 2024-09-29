/* 
  PaginatedSucursalCards
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-26
*/

// Importaciones
import { Container, Pager } from 'components';
import { localservices } from 'data';
import { useMediaQueries, usePagination } from 'hooks';
import PropTypes from 'prop-types';
import SucursalCard from './SucursalCard';

// Estructura
const PaginatedSucursalCards = () => {
  const { itemsPerPage } = useMediaQueries();

  const { paginatedData, handlePageChange, currentPage, handleNextPage, handlePrevPage } = usePagination(localservices, itemsPerPage);

  return (
    <Container>
      <div className='flex gap-12 mx-auto justify-between'>
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
            titleMailto={localservice.titleMailto}
            badge={localservice.badge}
            advertisement={localservice.advertisement}
            image={localservice.image}
          />
        ))}
      </div>
      <Pager handleNextPage={handleNextPage} handlePageChange={handlePageChange} handlePrevPage={handlePrevPage} itemsPerPage={itemsPerPage} localservices={localservices} currentPage={currentPage} />
    </Container>
  );
};
PaginatedSucursalCards.propTypes = {
  handlePrevPage: PropTypes.func,
  handleNextPage: PropTypes.func
}
export default PaginatedSucursalCards;
