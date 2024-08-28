import { Container, ImageResponsive, Section } from "components";
import PropTypes from "prop-types";

function Hero({ ...props }) {
  const {
    children, backgroundColor, backgroundImage_640, backgroundImage_1024, backgroundImage_1920, height, id, opacity, opacityColor, textColor, imageAlt,
  } = props;

  const classes = {
    section: `${textColor} relative overflow-hidden z-0 flex items-center justify-center`,
    image: "h-full object-cover w-full",
    opacity: `${opacity} absolute inset-0 -z-10 ${opacityColor}`,
  };

  return (
    <Section
      id={id}
      height={height}
      backgroundColor={backgroundColor}
      className={classes.section}
    >
      <div
        id={`imagen-${id}`}
        className="top:0 absolute inset-0 -z-20 h-full object-cover object-center"
      >
        <ImageResponsive
          src={backgroundImage_640}
          imageAlt={imageAlt}
          className={classes.image}
          image_640={backgroundImage_640}
          image_1024={backgroundImage_1024}
          image_1920={backgroundImage_1920} />
      </div>
      <div id={`opacidad-${id}`} className={classes.opacity} />
      <Container id={`contenido-${id}`}>{children}</Container>
    </Section>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundImage_640: PropTypes.string,
  backgroundImage_1024: PropTypes.string,
  backgroundImage_1920: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  opacity: PropTypes.string,
  opacityColor: PropTypes.string,
  textColor: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
};

export default Hero;
