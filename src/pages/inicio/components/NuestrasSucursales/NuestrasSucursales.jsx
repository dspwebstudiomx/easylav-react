import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ButtonContainer from '../../../../components/containers/ButtonContainer';
import ButtonSecondary from '../../../../components/buttons/ButtonSecondary';
import Section from '../../../../components/templates/Section';
import SucursalCard from '../../../../components/cards/SucursalCard';
import { localservices } from '../../../../data/sucursales';
import { FaEnvelope } from 'react-icons/fa6';
import TitleH2 from '../../../../components/title/TitleH2';
import BorderBottom from '../../../../components/borders/BorderBottom';
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import Container from '../../../../components/containers/Container';
import usePagination from './UsePagination';

const NuestrasSucursales = () => {

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const { paginatedData, handlePageChange, handlePrevPage, handleNextPage, currentPage } = usePagination(localservices, itemsPerPage);

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1239px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1240px) and (max-width: 1920px)' });

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(1);
    } else if (isTablet) {
      setItemsPerPage(2);
    } else if (isDesktop) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(3);
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <Section id="nuestras-sucursales">
      <Container className="mx-auto">
        <BorderBottom justify="mx-auto">
          <TitleH2 title="Sucursales" />
        </BorderBottom>
        <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : isDesktop ? 'grid-cols-3' : 'grid-cols-3'} gap-12 mx-auto place-content-center`}>
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
              width="w-[350px] w-[320px]"
              titleMailto={localservice.titleMailto}
            />
          ))}
        </div>
        <div className="mx-auto flex justify-center items-center gap-7">
          <button onClick={handlePrevPage}>
            <BiChevronLeftCircle className="mr-2 text-primary hover:text-secondary_light" size={65} />
          </button>
          <div className="hidden sm:flex">
            {Array(Math.ceil(localservices.length / itemsPerPage)).fill(0).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'text-2xl font-bold border-b-2 border-b-primary_dark hover:text-secondary_light font-semibold mx-2' : 'text-2xl font-semibold  hover:text-secondary_light mx-2'}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button onClick={handleNextPage}>
            <BiChevronRightCircle className="ml-2 text-primary hover:text-secondary_light" size={65} />
          </button>
        </div>
        <ButtonContainer position="justify-center" distance="mt-16">
          <ButtonSecondary title="Contáctanos" href="/contacto" width="w-[320px]" icon={<FaEnvelope />} height="h-[80px]" />
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default NuestrasSucursales;