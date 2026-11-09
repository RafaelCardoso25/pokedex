import TypeBadge from './TypeBadge.jsx'
import PokemonImage from './PokemonImage.jsx'
import { STATS, formatId, getTypeColor } from '../utils/pokemon.js'
import '../css/PokemonCard.css'

function PokemonCard({ pokemon, onSelect }) {
  const mainColor = getTypeColor(pokemon.types[0]?.name)

  return (
    <button
      type="button"
      className="pokemon-card"
      style={{ '--card-color': mainColor }}
      onClick={() => onSelect(pokemon)}
    >
      <span className="pokemon-card-id">{formatId(pokemon.id)}</span>
      <PokemonImage id={pokemon.id} name={pokemon.name} className="pokemon-card-image" />
      <h3 className="pokemon-card-name">{pokemon.name}</h3>
      <div className="pokemon-card-types">
        {pokemon.types.map((type) => (
          <TypeBadge key={type.id} name={type.name} />
        ))}
      </div>
      <dl className="pokemon-card-stats">
        {STATS.map((stat) => (
          <div key={stat.key} className="pokemon-card-stat">
            <dt>{stat.label}</dt>
            <dd>{pokemon.stats[stat.key]}</dd>
          </div>
        ))}
      </dl>
    </button>
  )
}

export default PokemonCard
