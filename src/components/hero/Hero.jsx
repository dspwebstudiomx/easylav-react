import { Container, Section } from "components";
import ImageResponsive from "components/images/ImageResponsive";
import PropTypes from "prop-types";

const Hero = ({ ...props }) => {
  const {
    children,
    backgroundColor,
    backgroundImage_640,
    backgroundImage_1024,
    backgroundImage_1920,
    height,
    titleSection,
    opacity,
    opacityColor,
    textColor,
    imageAlt,
  } = props;

  const styles = {
    section: `${textColor} relative overflow-hidden z-0 flex items-center justify-center`,
    image: "h-full object-cover w-full",
    opacity: `${opacity} absolute inset-0 -z-10 ${opacityColor}`,
  };

  return (
    <Section
      id={titleSection}
      height={height}
      backgroundColor={backgroundColor}
      className={styles.section}
    >
      <div
        id={`imagen-${titleSection}`}
        className="top:0 absolute inset-0 -z-20 h-full object-cover object-center"
      >
        <ImageResponsive
          src={backgroundImage_640}
          imageAlt={imageAlt}
          className={styles.image}
          image_640={backgroundImage_640}
          image_1024={backgroundImage_1024}
          image_1920={backgroundImage_1920}
        />
      </div>
      <div id={`opacidad-${titleSection}`} className={styles.opacity} />
      <Container id={`contenido-${titleSection}`}>{children}</Container>
    </Section>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundImage_640: PropTypes.string,
  backgroundImage_1024: PropTypes.string,
  backgroundImage_1920: PropTypes.string,
  height: PropTypes.string,
  titleSection: PropTypes.string,
  opacity: PropTypes.string,
  opacityColor: PropTypes.string,
  textColor: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
};

export default Hero;
