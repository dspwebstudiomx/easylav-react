import { useState } from 'react';
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
  const [itemsPerPage] = useState(4);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLocalservices = localservices.slice(startIndex, endIndex);
  const section = document.getElementById('nuestras-sucursales');


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(localservices.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <Section id="nuestras-sucursales" backgroundColor={''} height={''} className={''}>
      <Container className={'mx-auto'}>
        <BorderBottom justify={'mx-auto'} >
          <TitleH2 title="Sucursales" />
        </BorderBottom>
        <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 mx-auto place-content-center'>
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
              />
            )
          })}
        </div>
        <div className="mx-auto flex justify-center items-center gap-7">
          <button
            onClick={handlePrevPage}
          >
            <BiChevronLeftCircle className='mr-2 text-primary hover:text-secondary_light' size={45} />
          </button>
          {Array(Math.ceil(localservices.length / itemsPerPage)).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'text-2xl font-bold border-b-2 border-b-primary_dark hover:text-secondary_light font-semibold ' : 'text-2xl font-semibold  hover:text-secondary_light'}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
          >
            <BiChevronRightCircle className='ml-2 text-primary hover:text-secondary_light' size={45} />
          </button>
        </div>
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'w-[240px]'} icon={<FaEnvelope />} />
        </ButtonContainer>
      </Container>
    </Section>
  )
}

export default NuestrasSucursales;