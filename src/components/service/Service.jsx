import { TitleH3 } from 'components';
import PropTypes from 'prop-types';

const SERVICE_UI = {
  ELEMENT: {
    CLASSNAME:
      "flex flex-col gap-4 items-center justify-center shadow-2xl rounded-xl p-8 w-[260px] xl:w-[200px] hover:scale-110 duration-300 bg-light dark:border-4 dark:border-primary",
    DIV_VIDEO: "mx-auto w-32 sm:w-24 md:w-40",
    DIV_TITLEH3: "mx-auto text-primary",
  },
  IMAGE: "p-2",
  PARAGRAPH: "text-dark text-[16px] hidden",
};

const Service = ({ service }) => {
  return (
    <li id={service.idLink} className={SERVICE_UI.ELEMENT.CLASSNAME}>
      <div className={SERVICE_UI.ELEMENT.DIV_VIDEO}>
        <img className={SERVICE_UI.IMAGE} src={service.image} title={service.alt} alt={service.alt} />
      </div>
      <div className={SERVICE_UI.ELEMENT.DIV_TITLEH3}>
        <TitleH3>{service.title}</TitleH3>
      </div>
      <p className={SERVICE_UI.PARAGRAPH}>
        {service.description}
      </p>
    </li>
  );
}

Service.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    idLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
