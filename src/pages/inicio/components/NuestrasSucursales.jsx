import { useState } from 'react';
import Container from '../../../components/containers/Container';
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import Section from '../../../components/templates/Section'
import SucursalCard from '../../../components/cards/SucursalCard';
import { localservices } from '../../../data/sucursales'
import { FaEnvelope } from 'react-icons/fa6';
import TitleH2 from '../../../components/title/TitleH2';
import BorderButtom from '../../../components/borders/BorderButtom';

const NuestrasSucursales = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLocalservices = localservices.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Section id="nuestras-sucursales" backgroundColor={''} height={''} className={''}>
      <Container className={'mx-auto'}>
        <BorderButtom justify={'mx-auto'} >
          <TitleH2 title="Sucursales" />
        </BorderButtom>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 mx-auto place-content-center'>
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
        <div className="mx-auto">
          {Array(Math.ceil(localservices.length / itemsPerPage)).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'text-2xl text-primary px-2 font-semibold my-2' : 'text-2xl px-2 font-semibold mx-2'}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'w-[240px]'} icon={<FaEnvelope />} />
        </ButtonContainer>
      </Container>
    </Section>
  )
}

export default NuestrasSucursales;