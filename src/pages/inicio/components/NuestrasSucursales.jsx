import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../../../components/containers/Container';
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import Section from '../../../components/templates/Section'
// import SucursalCard from '../../../components/cards/SucursalCard';
import { localservices } from '../../../data/sucursales'
import { FaEnvelope } from 'react-icons/fa6';
import TitleH2 from '../../../components/title/TitleH2';
import BorderBottom from '../../../components/borders/BorderBottom';
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import SucursalCard from '../../../components/cards/SucursalCard';

const NuestrasSucursales = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isSmartphoneLandscape = useMediaQuery({ query: '(min-width: 480px) and (max-width: 767px) and (orientation: landscape)' });

  useEffect(() => {
    if (isSmartphoneLandscape) {
      setItemsPerPage(2);
      setIsLandscape(true);
    } else if (!isTabletOrDesktop) {
      setItemsPerPage(1);
      setIsMobile(true);
    } else {
      setItemsPerPage(3);
      setIsMobile(false);
    }
  }, [isTabletOrDesktop, isSmartphoneLandscape]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLocalservices = localservices.slice(startIndex, endIndex);
  // const section = document.getElementById('nuestras-sucursales');


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(localservices.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
      // window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <Section id="nuestras-sucursales" backgroundColor={''} height={''} className={''}>
      <Container className={'mx-auto'}>
        <BorderBottom justify={'mx-auto'} >
          <TitleH2 title="Sucursales" />
        </BorderBottom>
        <div className={`grid ${isMobile ? 'grid-cols-1' : isLandscape ? 'grid-cols-2' : 'grid-cols-3'} gap-12 mx-auto place-content-center`}>
          {paginatedLocalservices.map(localservice => {
            return (
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
                width={'w-[350px] sm:w-[240px]'}
              />
            )
          })}
        </div>
        <div className="mx-auto flex justify-center items-center gap-7">
          {/* Previous Button */}
          <button
            onClick={handlePrevPage}
          >
            <BiChevronLeftCircle className='mr-2 text-primary hover:text-secondary_light' size={65} />
          </button>
          {/* Previous Button */}
          {/* Pages  */}
          <div className='hidden sm:flex'>
            {Array(Math.ceil(localservices.length / itemsPerPage)).fill(0).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handlePageChange(index + 1)
                  // window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
                }}
                className={currentPage === index + 1 ? 'text-2xl font-bold border-b-2 border-b-primary_dark hover:text-secondary_light font-semibold mx-2' : 'text-2xl font-semibold  hover:text-secondary_light mx-2'}
              >
                {index + 1}
              </button>
            ))}
          </div>
          {/* Pages  */}
          {/* Next Button  */}
          <button
            onClick={handleNextPage}
          >
            <BiChevronRightCircle className='ml-2 text-primary hover:text-secondary_light' size={65} />
          </button>
          {/* Next Button  */}
        </div>
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'w-[320px]'} icon={<FaEnvelope />} height={'h-[100px]'} />
        </ButtonContainer>
      </Container>
    </Section>
  )
}

export default NuestrasSucursales;