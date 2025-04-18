import { LogoHorizontalBlanco } from 'assets';
import { SocialLinks } from 'components';
import { scrollWithOffset } from 'functions';
import { NavHashLink } from 'react-router-hash-link';

export default function FooterLogoWithSocial() {
  return (
    <div className="ml-auto flex flex-col md:flex-row lg:flex-col items-center sm:items-start justify-start gap-8 w-[76vw] sm:w-full">
      <NavHashLink to={'/#inicio'} scroll={scrollWithOffset}>
        <img
          alt="logo easylav a color"
          src={LogoHorizontalBlanco}
          width={240}
          title="logo easylav a color"
          aria-label="logo easylav"
        />
      </NavHashLink>
      <SocialLinks
        position={'justify-center md:justify-end'}
        color={'text-light'}
        size={21}
        circleBorder={'border-2 rounded-[100px] border-light p-2'}
        gap={'gap-3'}
        hover={'hover:text-primary hover:border-primary'}
      />
    </div>
  );
}
