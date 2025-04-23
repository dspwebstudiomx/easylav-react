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

// Lista de fechas específicas en las que la sucursal estará cerrada (formato MM-DD)
const closedDates = ['01-01', '12-25']; // Año Nuevo, Navidad, Fin de Año

// Lista de días festivos oficiales de México (formato MM-DD)
const mexicanHolidays = ['02-05', '03-21', '05-01', '09-15', '11-18'];

// Función para verificar si la sucursal está cerrada por una fecha específica
const isBranchClosedForDate = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  return closedDates.includes(formattedDate);
};

// Función para verificar si hoy es un día festivo
const isMexicanHoliday = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  return mexicanHolidays.includes(formattedDate);
};

// Función para determinar si la sucursal está abierta
const isBranchCurrentlyOpen = (defaultOpenHour, defaultOpenMinute, defaultCloseHour, defaultCloseMinute) => {
  if (isBranchClosedForDate()) {
    return false; // Cerrado por fecha específica
  }

  // Obtener la hora actual en minutos
  const currentTime = new Date();
  const currentTimeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  // Si es un día festivo, ajustar el horario de cierre a las 6 PM
  const adjustedCloseHour = isMexicanHoliday() ? 18 : defaultCloseHour;
  const adjustedCloseMinute = isMexicanHoliday() ? 0 : defaultCloseMinute;

  const openTime = defaultOpenHour * 60 + defaultOpenMinute;
  const closeTime = adjustedCloseHour * 60 + adjustedCloseMinute;

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
  advertisement,
  position,
  title,
  city,
  image,
  place,
  gmap,
  serviceday1,
  servicehour1,
  openHour,
  closeHour,
  openMinute,
  closeMinute,
  disableZoom,
  badge,
}) => {
  const { showModal, setShowModal } = useShowModal();

  const handleShowModal = useCallback(() => {
    if (!disableZoom) {
      setShowModal(true);
    }
  }, [disableZoom, setShowModal]);

  const isOpen = useMemo(
    () => isBranchCurrentlyOpen(openHour, openMinute, closeHour, closeMinute),
    [openHour, openMinute, closeHour, closeMinute]
  );

  return (
    <article
      id={`sucursal-${title}`}
      key={title}
      className={classNames(
        'animate__animated animate__fadeIn animate__slower bg-light text-dark flex flex-col relative mx-auto justify-center items-center overflow-hidden rounded-xl shadow-xl w-[240px] md:w-[280px] xl:w-[280px]',
        { 'z-10': showModal }
      )}>
      {/* Imagen */}
      <BackgroundImageSection
        id={`sucursal-${title}`}
        image={image}
        image_240={image}
        image_576={image}
        image_768={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
        title={`Imagen de sucursal ${title} en ${city}`}
        alt={`Vista externa de Sucursal Easylav ${title} en ${city}`}
        width="w-[250px]"
        height="h-[160px]"
        opacity="opacity-40"
        backgroundColor="bg-dark"
        className="rounded-t-xl overflow-hidden">
        <div className="flex justify-end items-start h-full absolute top-0 right-0 p-4">
          {renderOpenClosedBadge(isOpen)}
        </div>
        {!disableZoom && (
          <div className="flex justify-end items-end h-full absolute top-0 right-0 p-4">
            <button
              onClick={handleShowModal}
              id="zoom"
              className="text-light rounded-full border-2 border-light p-3 opacity-40 bg-dark hover:bg-secondary hover:opacity-100"
              aria-label={`Abrir detalles de la sucursal ${title}`}>
              <FaMagnifyingGlass />
            </button>
          </div>
        )}
      </BackgroundImageSection>

      {/* Descripción */}
      <section className="flex flex-col gap-4 justify-between items-center min-h-[260px]">
        <div className="p-8 flex flex-col gap-4 items-center h-full">
          <TitleH3 justify="justify-center" color="text-dark" fontSize="text-lg" textTransform="uppercase">
            {title}
          </TitleH3>
          <div className="flex flex-col gap-4 items-start">
            <a
              className="flex gap-6 justify-center"
              href={gmap}
              target="_blank"
              rel="noopener noreferrer"
              title={`Sucursal ${title}`}>
              <div className="w-10 h-10">
                <FaMapMarkerAlt size={20} className="text-secondary" />
              </div>
              <span className="text-base text-dark">{place}</span>
            </a>
            <div className="flex gap-2 justify-center items-center">
              <div className="w-10 h-10">
                <FaRegClock size={20} className="text-secondary" />
              </div>
              <div className="text-base text-dark flex flex-col gap-1">
                <span>{serviceday1}</span>
                <span>{servicehour1}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement */}
      {advertisement && (
        <section className="w-full">
          <Badge backgroundColor="bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary">
            <p className="text-sm uppercase px-8">{advertisement}</p>
          </Badge>
          {renderMapLinks(position, title, gmap)}
        </section>
      )}

      {/* Badge */}
      {badge && (
        <section className="absolute -left-14 top-0 w-[280px] rotate-[320deg] rounded-lg border-2 border-secondary bg-secondary_light px-4 py-1 text-light flex items-center text-sm">
          <p className="ml-8">{badge}</p>
        </section>
      )}

      {/* Modal */}
      {showModal && (
        <Modal width="w-[80vw] md:w-[90vw] z-[10000]">
          <div className="mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-8 gap-8">
            <button id="button-close" onClick={() => setShowModal(false)}>
              <FaXmark size={36} className="z-30 ml-auto text-primary_dark" />
            </button>
            <div className="flex flex-col items-center justify-center gap-8">
              <img
                src={image}
                alt={title}
                className="w-[340px] h-[280px] xl:w-[340px] xl:max-h-[280px] object-cover shadow-2xl"
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

export default memo(SucursalCard);

// Propiedades del componente
SucursalCard.propTypes = {
  advertisement: PropTypes.string,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  gmap: PropTypes.string.isRequired,
  serviceday1: PropTypes.string.isRequired,
  servicehour1: PropTypes.string.isRequired,
  openHour: PropTypes.number.isRequired,
  closeHour: PropTypes.number.isRequired,
  openMinute: PropTypes.number.isRequired,
  closeMinute: PropTypes.number.isRequired,
  disableZoom: PropTypes.bool,
  badge: PropTypes.string,
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
