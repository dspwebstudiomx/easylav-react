import { Container, ImageResponsive, Section } from "components";
import PropTypes from "prop-types";

function Hero({ ...props }) {
  const {
    children, backgroundColor, backgroundImage_640, backgroundImage_1024, backgroundImage_1920, height, id, opacity, opacityColor, imageAlt,
  } = props;

  const classes = {
    section: `relative overflow-hidden z-0 flex`,
    image: "absolute inset-0 h-full object-cover w-full z-0",
    container: `absolute w-full h-full flex top-32 md:top-20 xl:left-20 max-w-screen-lg lg:mx-0 flex mx-auto 2xl:left-96`,
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
      <Container id={`contenido-${id}`} className={`${classes.container} ${height}`}>
        <div className="w-4/5 mx-auto">
          {children}
        </div>
      </Container>
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
  textColor: PropTypes.string.isRequired,
};

export default Hero;
