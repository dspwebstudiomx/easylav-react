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
  return (
    <Section id="nuestras-sucursales" backgroundColor={''} height={''} className={''}>
      <Container className={'mx-auto'}>
        <BorderButtom justify={'mx-auto'} >
          <TitleH2 title="Sucursales" />
        </BorderButtom>
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
                ciudad={localservice.ciudad}
                email={localservice.email}
              />
            )
          })}
        </div>
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'w-[240px]'} icon={<FaEnvelope />} />
        </ButtonContainer>
      </Container>
    </Section >
  )
}
export default NuestrasSucursales