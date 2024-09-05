import { Paragraph, TitleH3 } from 'components'
import PropTypes from 'prop-types'
import { TbPoint } from "react-icons/tb"

export default function DescriptionWithBulletPoint({ ...props }) {

  const { texto, id, titulo } = props

  const classes = {
    caracteristica: 'flex gap-2 text-balance',
  }

  return (
    <li key={id} id={`descripcion-${id}`} className={classes.caracteristica}>
      <span className='text-primary'>
        <TbPoint size={32} />
      </span>
      <div className='flex flex-col justify-start items-start'>
        <TitleH3 title={titulo} />
        <Paragraph>
          {texto}
        </Paragraph>
      </div>
    </li>
  )
}
DescriptionWithBulletPoint.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  id: PropTypes.number,
}