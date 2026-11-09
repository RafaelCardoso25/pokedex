import { getTypeColor } from '../utils/pokemon.js'
import '../css/TypeBadge.css'

function TypeBadge({ name }) {
  return (
    <span className="type-badge" style={{ backgroundColor: getTypeColor(name) }}>
      {name}
    </span>
  )
}

export default TypeBadge
