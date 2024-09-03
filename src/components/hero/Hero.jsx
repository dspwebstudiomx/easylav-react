import { Container, ImageResponsive, Section } from "components";
import PropTypes from "prop-types";

function Hero({ ...props }) {
  const {
    children, backgroundColor, backgroundImage_640, backgroundImage_1024, backgroundImage_1920, height, id, opacity, opacityColor, imageAlt,
  } = props;

  const classes = {
    section: `relative overflow-hidden z-0 flex justify-start`,
    image: "absolute inset-0 h-full object-cover w-full",
    container: 'absolute top-20 left-16 xl:top-28 sm:left-20 xl:left-64 z-2',
    opacity: `${opacity} absolute inset-0 z-1 ${opacityColor}`,
  };


  return (
    <Section id={id} height={height} backgroundColor={backgroundColor} className={classes.section}    >
      <ImageResponsive
        src={backgroundImage_640}
        imageAlt={imageAlt}
        className={classes.image}
        image_640={backgroundImage_640}
        image_1024={backgroundImage_1024}
        image_1920={backgroundImage_1920} />
      <div id={`opacidad-${id}`} className={classes.opacity} />
      <Container id={`contenido-${id}`} className={classes.container}>{children}</Container>
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
  imageAlt: PropTypes.string.isRequired,
};

export default Hero;
