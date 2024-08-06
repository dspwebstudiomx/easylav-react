import { Container, Section } from 'components';
import PropTypes from 'prop-types';

const Hero = ({ ...props }) => {

  const { children, backgroundColor, backgroundImage, height, titleSection, opacity, opacityColor, textColor, imageAlt, } = props

  const styles = {
    section: `${textColor} relative overflow-hidden z-0 flex items-center justify-center`,
    image: 'h-full object-cover w-full',
    opacity: `${opacity} absolute inset-0 -z-10 ${opacityColor}`,
  };

  return (
    <Section
      id={titleSection}
      backgroundImage={backgroundImage}
      height={height}
      backgroundColor={backgroundColor}
      className={styles.section}
    >
      <div id={`imagen-${titleSection}`} className="inset-0 -z-20 h-full object-cover object-center absolute top:0">
        <img src={backgroundImage} alt={imageAlt} title={imageAlt} className={styles.image} />
      </div>
      <div id={`opacidad-${titleSection}`} className={styles.opacity} />
      <Container id={`contenido-${titleSection}`}>{children}</Container>
    </Section>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
  titleSection: PropTypes.string,
  opacity: PropTypes.string,
  opacityColor: PropTypes.string,
  textColor: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
};

export default Hero;