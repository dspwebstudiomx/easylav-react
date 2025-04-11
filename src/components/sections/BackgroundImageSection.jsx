import { Container, Section } from 'components';
import PropTypes from 'prop-types';

const BackgroundImageSection = ({
  id,
  width,
  height,
  children,
  image_768,
  image_576,
  image_240,
  image_1024,
  image_1200,
  image_1920,
  opacity,
  image,
  backgroundColor,
  rounded,
  alt,
  title,
}) => {
  return (
    <Section
      id={id}
      className={`${height} relative flex items-center justify-center overflow-hidden z-0 ${rounded} w-full`}>
      {/* Background Image */}
      <img
        src={image_768}
        srcSet={`
          ${image_240} 240w,
          ${image_576} 576w,
          ${image_768} 768w,
          ${image_1024} 1024w,
          ${image_1200} 1200w,
          ${image_1920} 1920w,
                      `}
        alt={alt}
        className={`absolute inset-0 -z-50 h-full w-full object-cover overflow-hidden ${image} ${height} ${width}`}
        title={title}
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className={`absolute top-0 left-0 -z-40 ${backgroundColor} ${opacity} ${height} w-full`}></div>
      {/* Overlay */}

      {/* Container */}
      <Container className="">{children}</Container>
      {/* Container */}
    </Section>
  );
};
BackgroundImageSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  image_240: PropTypes.string,
  image_576: PropTypes.string,
  image_768: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
  opacity: PropTypes.string,
  backgroundColor: PropTypes.string,
  rounded: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};
export default BackgroundImageSection;
