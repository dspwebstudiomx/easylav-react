import { LogoHorizontalBlanco } from 'assets'
import { SocialLinks } from 'components'

export default function FooterLogoWithSocial() {
  return (
    <div className="ml-auto flex flex-col md:flex-row lg:flex-col items-center sm:items-start justify-start gap-8 w-[76vw] sm:w-auto">
      <img src={LogoHorizontalBlanco} alt="logo blanco" width={210} className='w-40' />
      <SocialLinks
        position={"justify-center md:justify-end"}
        color={"text-light"}
        size={26}
        circleBorder={"border-2 rounded-[100px] border-light p-3"}
        gap={"gap-4"}
        hover={"hover:text-primary hover:border-primary"}
      />
    </div>
  )
}


