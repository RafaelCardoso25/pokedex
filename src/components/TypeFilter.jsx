import { getTypeColor } from '../utils/pokemon.js'
import '../css/TypeFilter.css'

function TypeFilter({ types, selectedType, onSelectType }) {
  return (
    <div className="type-filter" role="group" aria-label="Filtrar por tipo">
      <button
        type="button"
        className={`type-filter-btn ${selectedType === '' ? 'active' : ''}`}
        onClick={() => onSelectType('')}
      >
        Todos
      </button>
      {types.map((type) => (
        <button
          key={type.id}
          type="button"
          className={`type-filter-btn ${selectedType === type.name ? 'active' : ''}`}
          style={{ '--type-color': getTypeColor(type.name) }}
          onClick={() => onSelectType(selectedType === type.name ? '' : type.name)}
        >
          {type.name}
        </button>
      ))}
    </div>
  )
}

export default TypeFilter
