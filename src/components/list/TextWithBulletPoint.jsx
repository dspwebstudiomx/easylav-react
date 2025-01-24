import { TitleH2 } from 'components'
import PropTypes from 'prop-types'
import { TbPoint } from "react-icons/tb"
export default function TextWithBulletPoint({ ...props }) {

  const { id, texto, titulo } = props

  return (
    <li className="flex w-full items-start gap-8" id={`descripcion-${id}`} key={id} >
      <div className="w-[32px]">
        <TbPoint className='text-primary text-4xl' />
      </div>
      <div className='flex flex-col gap-4 text-dark'>
        <TitleH2>
          {titulo}
        </TitleH2>
        <span className='text-dark dark:text-light'>
          {texto}
        </span>

      </div>
    </li>
  )
}
TextWithBulletPoint.propTypes = {
  id: PropTypes.number,
  texto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
}