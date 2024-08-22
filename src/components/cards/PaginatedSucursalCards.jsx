import { Pager } from 'components';
import { localservices } from 'data';
import { useMediaQueries, usePagination } from 'hooks';
import SucursalCard from './SucursalCard';

const PaginatedSucursalCards = () => {
  const { isMobile, isTablet, isDesktop, itemsPerPage } = useMediaQueries();

  const {
    paginatedData,
    handlePageChange,
    handlePrevPage,
    handleNextPage,
    currentPage,
  } = usePagination(localservices, itemsPerPage);

  return (
    <>
      <div
        className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : isDesktop ? 'grid-cols-3' : 'grid-cols-4'} mx-auto place-content-center gap-12`}
      >
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
            width='w-[100%]  sm:w-[240px] 2xl:w-[280px] mx-auto'
            titleMailto={localservice.titleMailto}
            badge={localservice.badge}
            advertisement={localservice.advertisement}
          />
        ))}
      </div>
      <Pager
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        handlePrevPage={handlePrevPage}
        itemsPerPage={itemsPerPage}
        localservices={localservices}
        currentPage={currentPage}
      />
    </>
  );
};
export default PaginatedSucursalCards;
