import { useEffect } from 'react'
import TypeBadge from './TypeBadge.jsx'
import StatBar from './StatBar.jsx'
import PokemonImage from './PokemonImage.jsx'
import { STATS, formatId, getTypeColor } from '../utils/pokemon.js'
import '../css/PokemonDetails.css'

function PokemonDetails({ pokemon, onClose }) {
  const mainColor = getTypeColor(pokemon.types[0]?.name)
  const total = STATS.reduce((sum, stat) => sum + pokemon.stats[stat.key], 0)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="details-overlay" onClick={onClose}>
      <div
        className="details-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes de ${pokemon.name}`}
        style={{ '--card-color': mainColor }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="details-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="details-hero">
          <PokemonImage id={pokemon.id} name={pokemon.name} className="details-image" />
        </div>

        <div className="details-body">
          <span className="details-id">{formatId(pokemon.id)}</span>
          <h2 className="details-name">{pokemon.name}</h2>
          <div className="details-types">
            {pokemon.types.map((type) => (
              <TypeBadge key={type.id} name={type.name} />
            ))}
          </div>

          <h3 className="details-section-title">Atributos</h3>
          <div className="details-stats">
            {STATS.map((stat) => (
              <StatBar
                key={stat.key}
                label={stat.label}
                value={pokemon.stats[stat.key]}
                color={mainColor}
              />
            ))}
          </div>
          <p className="details-total">
            Total <strong>{total}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
