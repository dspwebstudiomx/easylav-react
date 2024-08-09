import { localservices } from "data/sucursales";
import { useMediaQueries, usePagination } from "hooks";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import SucursalCard from "./SucursalCard";

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
        className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : isDesktop ? "grid-cols-3" : "grid-cols-4"} mx-auto place-content-center gap-12`}
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
            serviceday2={localservice.serviceday2}
            servicehour2={localservice.servicehour2}
            ciudad={localservice.ciudad}
            email={localservice.email}
            width="w-[100%]  sm:w-[240px] 2xl:w-[280px] mx-auto"
            titleMailto={localservice.titleMailto}
            badge={localservice.badge}
            advertisement={localservice.advertisement}
          />
        ))}
      </div>
      <div className="mx-auto flex items-center justify-center gap-7">
        <button onClick={handlePrevPage}>
          <BiChevronLeftCircle
            className="mr-2 text-secondary hover:text-secondary_dark"
            size={65}
          />
        </button>
        <div className="hidden sm:flex">
          {Array(Math.ceil(localservices.length / itemsPerPage))
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={
                  currentPage === index + 1
                    ? "mx-2 border-b-2 border-b-primary_dark text-2xl font-bold font-semibold hover:text-secondary_light"
                    : "mx-2 text-2xl font-semibold hover:text-secondary_light"
                }
              >
                {index + 1}
              </button>
            ))}
        </div>
        <button onClick={handleNextPage}>
          <BiChevronRightCircle
            className="ml-2 text-secondary hover:text-secondary_dark"
            size={65}
          />
        </button>
      </div>
    </>
  );
};
export default PaginatedSucursalCards;
