import PropTypes from 'prop-types'
import { TbPoint } from "react-icons/tb"


const TextWithBulletPoint = ({ ...props }) => {

  const { texto, id } = props

  return (
    <li className="flex w-full" id={`descripcion-${id}`} key={id} >
      <div className="w-[32px]">
        <TbPoint className='text-primary text-4xl' />
      </div>
      <span className='ml-2'>
        {texto}
      </span>
    </li>
  )
}
TextWithBulletPoint.propTypes = {
  texto: PropTypes.string.isRequired,
  id: PropTypes.number,
}

export default TextWithBulletPoint