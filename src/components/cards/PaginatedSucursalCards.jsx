/* 
  PaginatedSucursalCards
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-26
*/

// Importaciones
import { Container, Pager, SucursalCard } from 'components';
import { localservices } from 'data';
import { useMediaQueries, usePagination } from 'hooks';
import PropTypes from 'prop-types';

// Estructura
const PaginatedSucursalCards = () => {

  // Usar el Custom Hook - useMediaQueries
  const { itemsPerPage } = useMediaQueries();

  // Ordenar localservices alfabéticamente por el título
  const sortedLocalServices = [...localservices].sort((a, b) => a.title.localeCompare(b.title));

  // Usar el Custom Hook - usePagination con los datos ordenados
  const { paginatedData, handlePageChange, currentPage, handleNextPage, handlePrevPage } = usePagination(sortedLocalServices, itemsPerPage);

  return (
    <Container>
      <div className='flex gap-12 mx-auto justify-between'>
        {paginatedData.map((localservice) => (
          <SucursalCard
            key={localservice.id}
            position={localservice.position}
            place={localservice.place}
            gmap={localservice.gmap}
            title={localservice.title}
            serviceday1={localservice.serviceday1}
            servicehour1={localservice.servicehour1}
            email={localservice.email}
            badge={localservice.badge}
            advertisement={localservice.advertisement}
            image={localservice.image}
            openHour={localservice.openHour}
            closeHour={localservice.closeHour}
            openMinute={localservice.openMinute}
            closeMinute={localservice.closeMinute}
          />
        ))}
      </div>
      <Pager handleNextPage={handleNextPage} handlePageChange={handlePageChange} handlePrevPage={handlePrevPage} itemsPerPage={itemsPerPage} localservices={sortedLocalServices} currentPage={currentPage} />
    </Container>
  );
};

PaginatedSucursalCards.propTypes = {
  handlePrevPage: PropTypes.func,
  handleNextPage: PropTypes.func
}

export default PaginatedSucursalCards;