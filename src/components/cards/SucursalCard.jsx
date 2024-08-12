import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Badge } from "components";
import PropTypes from "prop-types";
import { FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock, FaWaze } from "react-icons/fa6";

const SucursalCard = ({
  title,
  id,
  position,
  serviceday1,
  servicehour1,
  place,
  email,
  gmap,
  width,
  titleMailto,
  badge,
  advertisement,
}) => {
  const googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY;

  // Obtenemos la hora actual
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // Definimos el horario de servicio
  const openHour = 7;
  const openMinute = 30;
  const closeHour = 21;
  const closeMinute = 30;

  // Comparamos la hora actual con el horario de servicio
  const isOpen =
    (currentHour > openHour ||
      (currentHour === openHour && currentMinute >= openMinute)) &&
    (currentHour < closeHour ||
      (currentHour === closeHour && currentMinute < closeMinute));

  return (
    <article
      id={`sucursal-${title}`}
      key={id}
      className={`relative ${width} animate__animated animate__bounceIn animate__slower flex min-h-[432px] flex-col justify-between gap-8 overflow-hidden rounded-xl bg-light shadow-xl dark:text-dark lg:gap-0`}
    >
      {/* mapa */}
      <div className="h-[150px] overflow-hidden rounded-t-lg w-full">
        <APIProvider apiKey={googleAPIKey}>
          <Map
            defaultCenter={position}
            zoom={17}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            mapTypeControl={false}
          />
        </APIProvider>
      </div>
      {/* mapa */}
      <div className="relative flex flex-col justify-start gap-3 px-6">
        <h3 className="pb-4 text-center text-xl font-semibold uppercase sm:text-base">
          {title}
        </h3>
        {/* Dirección */}
        <a
          href={gmap}
          target="_blank"
          rel="noopener noreferrer"
          title={`sucursal ${title}`}
        >
          <p className="text-md mx-auto flex w-full items-center gap-4 text-balance sm:text-xs">
            <span className="text-xl text-secondary">
              <FaMapMarkerAlt size={25} />
            </span>
            <span>{place}</span>
          </p>
        </a>
        {/* Dirección */}
        {/* Horario */}
        <div className="mx-auto mb-2 flex w-full items-center gap-4 text-pretty">
          <span className="text-secondary">
            <FaRegClock size={22} />
          </span>
          <div className="flex gap-3 xl:gap-2">
            <div className="flex flex-col gap-1 text-xs">
              <p className="text-md sm:text-sm">{serviceday1}</p>
              <p className="text-md sm:text-sm">{servicehour1}</p>
            </div>
          </div>
        </div>
        {/* Horario */}
      </div>
      {/* Badge */}
      <div>
        {!badge && (
          <div className="w-full">
            {/* Enviar Correo */}
            <a
              href={`mailto:${email}`}
              title={titleMailto}
              type={"button"}
              className="flex w-full items-center justify-center gap-3 text-lg"
            >
              <Badge backgroundColor="bg-secondary_light md:bg-secondary sm:hover:bg-secondary">
                <FaEnvelope />
                <span className="">Enviar correo</span>
              </Badge>
            </a>
            {/* Enviar Correo */}

            <div className="flex md:hidden">
              {/* Waze */}
              <a
                href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ir a ${title} en Waze`}
                className="flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary text-lg"
              >
                <Badge backgroundColor="flex-col">
                  <FaWaze size={32} />
                  <span>Waze</span>
                </Badge>
              </a>
              {/* Waze */}

              {/* Google Maps */}
              <a
                href={gmap}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ir a ${title} en Google Maps`}
                className="flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary_dark text-lg"
              >
                <Badge backgroundColor="flex-col">
                  <FaMapMarkedAlt size={32} />
                  <span>Google Maps</span>
                </Badge>
              </a>
              {/* Google Maps */}
            </div>
          </div>
        )}
        {badge && (
          <div className="">
            <Badge backgroundColor="bg-secondary_light">
              <p className="text-lg">{badge}</p>
            </Badge>

            <div className="flex md:hidden">
              {/* Waze */}
              <a
                href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ir a ${title} en Waze`}
                className="flex w-auto w-full flex-col items-center justify-center gap-3 bg-secondary text-lg"
              >
                <Badge backgroundColor="flex-col">
                  <FaWaze size={32} />
                  <span>Waze</span>
                </Badge>
              </a>
              {/* Waze */}

              {/* Google Maps */}
              <a
                href={gmap}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ir a ${title} en Google Maps`}
                className="flex w-auto w-full flex-col items-center justify-center gap-3 bg-secondary_dark text-lg"
              >
                <Badge backgroundColor="flex-col">
                  <FaMapMarkedAlt size={32} />
                  <span className="mx-auto text-center">Google Maps</span>
                </Badge>
              </a>
              {/* Google Maps */}
            </div>
          </div>
        )}
      </div>
      {/* Badge */}

      {/* Bubbles */}
      {isOpen && (
        <div className="absolute right-3 top-3 rounded-lg border-2 border-primary bg-primary_dark px-4 py-2 text-light">
          <p className="text-sm">Abierto</p>
        </div>
      )}
      {!isOpen && (
        <div className="absolute right-3 top-3 rounded-lg border-2 border-red_dark bg-red_light px-4 py-2 text-red_dark">
          <p className="text-sm">Cerrado</p>
        </div>
      )}
      {advertisement && (
        <div className="absolute -left-14 top-0 w-[280px] rotate-[320deg] rounded-lg border-2 border-secondary bg-secondary_light px-4 py-1 text-light dark:border-primary_dark dark:bg-primary">
          <p className="ml-8 text-sm">{advertisement}</p>
        </div>
      )}
      {/* Bubbles */}
    </article>
  );
};
SucursalCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.object,
  gmap: PropTypes.string,
  serviceday1: PropTypes.string,
  servicehour1: PropTypes.string,
  email: PropTypes.string,
  place: PropTypes.string,
  titleMailto: PropTypes.string,
  badge: PropTypes.string,
  advertisement: PropTypes.string,
};

export default SucursalCard;
