import PropTypes from 'prop-types'
import { TbPoint } from "react-icons/tb"
export default function TextWithBulletPoint({ ...props }) {

  const { id, texto, titulo } = props

  return (
    <li className="flex w-full" id={`descripcion-${id}`} key={id} >
      <div className="w-[32px]">
        <TbPoint className='text-primary text-4xl' />
      </div>
      <div className='flex flex-col gap-6 bg-red_light'>
        <span className=''>
          {titulo}
        </span>
        <span className=''>
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