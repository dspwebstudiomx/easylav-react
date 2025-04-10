/* eslint-disable react-refresh/only-export-components */
/*
  SucursalCard - Componente de Tarjeta de Sucursal
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Componente que representa una tarjeta de sucursal con información relevante.
  Incluye una imagen de fondo, título, dirección, horario de atención y un botón para ver más detalles.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-27
*/

// Importaciones
import classNames from 'classnames';
import { BackgroundImageSection, Badge, Modal, TitleH3 } from 'components';
import { useShowModal } from 'hooks';
import PropTypes from 'prop-types';
import { memo, useMemo, useCallback } from 'react';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaMagnifyingGlass, FaRegClock, FaWaze, FaXmark } from 'react-icons/fa6';

// Lista de días festivos oficiales de México
const holidays = ['01-01', '25-12'];

// Función para verificar si hoy es un día festivo
const isHoliday = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  return holidays.includes(formattedDate);
};

// Función para determinar si la sucursal está abierta
const isBranchCurrentlyOpen = (openHour, openMinute, closeHour, closeMinute) => {
  if (isHoliday()) return false;
  const currentTime = new Date();
  const currentTimeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;
  return currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
};

// Renderiza el badge de abierto/cerrado
const renderOpenClosedBadge = (isOpen) => (
  <div
    className={`rounded-lg border-2 text-xs ${
      isOpen
        ? 'border-primary_darkcontrast bg-primary text-primary_darkcontrast'
        : 'border-red_dark bg-red_light text-red'
    } px-4 py-2`}>
    <p>{isOpen ? 'Abierto' : 'Cerrado'}</p>
  </div>
);

// Renderiza los enlaces de Waze y Google Maps
const renderMapLinks = (position, title, gmap) => (
  <div className="flex md:hidden">
    <a
      href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
      target="_blank"
      rel="noopener noreferrer"
      title={`Ir a ${title} en Waze`}
      className="flex w-full flex-col items-center justify-center gap-2 bg-secondary text-sm">
      <Badge flexDirection="flex-col">
        <FaWaze size={24} />
        <span>Waze</span>
      </Badge>
    </a>
    <a
      href={gmap}
      target="_blank"
      rel="noopener noreferrer"
      title={`Ir a ${title} en Google Maps`}
      className="flex w-full flex-col items-center justify-center gap-2 bg-secondary_dark text-sm">
      <Badge flexDirection="flex-col">
        <FaMapMarkedAlt size={24} />
        <span>Google Maps</span>
      </Badge>
    </a>
  </div>
);

// Componente principal
const SucursalCard = ({
  title,
  position,
  place,
  gmap,
  badge,
  advertisement,
  image,
  serviceday1,
  servicehour1,
  openHour,
  closeHour,
  openMinute,
  closeMinute,
  disableZoom,
}) => {
  const { showModal, setShowModal } = useShowModal();

  const handleShowModal = useCallback(() => setShowModal(true), [setShowModal]);

  const isOpen = useMemo(
    () => isBranchCurrentlyOpen(openHour, openMinute, closeHour, closeMinute),
    [openHour, openMinute, closeHour, closeMinute]
  );

  return (
    <article id={`sucursal-${title}`} className={classNames('rounded-xl shadow-xl w-[250px] mx-auto')}>
      {/* Imagen */}
      <BackgroundImageSection
        id={`sucursal-${title}`}
        image={image}
        width="w-full"
        height="h-[160px]"
        opacity="opacity-30"
        backgroundColor="bg-dark"
        className="rounded-t-xl">
        <div className="flex justify-end items-start h-full absolute top-0 right-0 p-4">
          {renderOpenClosedBadge(isOpen)}
        </div>
        {!disableZoom && (
          <div className="flex justify-end items-end h-full absolute top-0 right-0 p-4">
            <button
              onClick={handleShowModal}
              className="text-light rounded-full border-2 border-light p-3 opacity-40 bg-dark hover:bg-secondary hover:opacity-100 cursor-pointer"
              aria-label={`Abrir detalles de la sucursal ${title}`}>
              <FaMagnifyingGlass />
            </button>
          </div>
        )}
      </BackgroundImageSection>

      {/* Descripción */}
      <section className="flex flex-col gap-4 justify-between items-center min-h-[240px] p-8">
        <TitleH3 justify="justify-center" color="text-dark" fontSize="text-lg" textTransform="uppercase">
          {title}
        </TitleH3>
        <div className="flex flex-col gap-4 items-start">
          <a
            href={gmap}
            target="_blank"
            rel="noopener noreferrer"
            title={`Sucursal ${title}`}
            className="flex gap-6 justify-center">
            <FaMapMarkerAlt size={20} className="text-secondary" />
            <span className="text-[15px] sm:text-[12px] text-dark">{place}</span>
          </a>
          <div className="flex gap-6 justify-center">
            <FaRegClock size={20} className="text-secondary" />
            <div className="text-[15px] sm:text-[12px] text-dark flex flex-col gap-1">
              <span>{serviceday1}</span>
              <span>{servicehour1}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement */}
      {advertisement ? (
        <section className="w-full">
          <Badge backgroundColor="bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary">
            <p className="text-sm uppercase px-8">{advertisement}</p>
          </Badge>
          {renderMapLinks(position, title, gmap)}
        </section>
      ) : (
        <div className="w-full">{renderMapLinks(position, title, gmap)}</div>
      )}

      {/* Badge */}
      {badge && (
        <section className="absolute -left-14 top-0 w-[280px] rotate-[320deg] rounded-lg border-2 border-secondary bg-secondary_light px-4 py-1 text-light flex items-center text-sm">
          <p className="ml-8">{badge}</p>
        </section>
      )}

      {/* Modal */}
      {showModal && (
        <Modal width="w-[80vw] md:w-[40vw] z-50">
          <div className="mx-auto flex flex-col rounded-xl gap-8 border-4 border-primary bg-light p-8">
            <button onClick={() => setShowModal(false)}>
              <FaXmark size={36} className="z-30 ml-auto text-primary_dark" />
            </button>
            <div className="flex flex-col items-center justify-center gap-8">
              <img
                src={image}
                alt={title}
                width={340}
                height={280}
                loading="lazy"
                className="xl:w-[480px] xl:h-[320px] object-cover shadow-2xl"
              />
              <TitleH3 textTransform="uppercase" fontSize="text-xl" color="text-dark">
                {title}
              </TitleH3>
            </div>
          </div>
        </Modal>
      )}
    </article>
  );
};

// PropTypes
SucursalCard.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  gmap: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  badge: PropTypes.string,
  advertisement: PropTypes.string,
  image: PropTypes.string.isRequired,
  serviceday1: PropTypes.string.isRequired,
  servicehour1: PropTypes.string.isRequired,
  openHour: PropTypes.number.isRequired,
  closeHour: PropTypes.number.isRequired,
  openMinute: PropTypes.number.isRequired,
  closeMinute: PropTypes.number.isRequired,
  disableZoom: PropTypes.bool,
};

export default memo(SucursalCard);
