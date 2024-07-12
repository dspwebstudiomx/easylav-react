import Container from '../../../components/containers/Container';
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import Section from '../../../components/templates/Section'
import SucursalCard from '../../../components/cards/SucursalCard';
import { localservices } from '../../../data/sucursales'
import { FaEnvelope } from 'react-icons/fa6';
import TitleH2 from '../../../components/title/TitleH2';

const NuestrasSucursales = () => {
  return (
    <Section id="nuestras-sucursales">
      <Container >
        <div className='grid place-content-center'>
          <TitleH2 title='Sucursales' />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 mx-auto place-content-center'>
          {localservices.map(localservice => {
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
                ciudad={localservices.ciudad}
              />
            )
          })}
        </div>
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'w-[240px]'} border={'border-primary border-4'} icon={<FaEnvelope />} />
        </ButtonContainer>
      </Container>
    </Section >
  )
}
export default NuestrasSucursales