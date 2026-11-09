import PokemonImage from './PokemonImage.jsx'
import { formatId } from '../utils/pokemon.js'
import '../css/TrainerCard.css'

function TrainerCard({ trainer, team, onSelectPokemon }) {
  return (
    <article className="trainer-card">
      <header className="trainer-card-header">
        <div className="trainer-avatar" aria-hidden="true">
          {trainer.name.charAt(0)}
        </div>
        <div>
          <h3 className="trainer-name">{trainer.name}</h3>
          <p className="trainer-badges">
            🏅 {trainer.badges} {trainer.badges === 1 ? 'insígnia' : 'insígnias'}
          </p>
        </div>
      </header>

      <p className="trainer-team-title">Pokémon ({team.length})</p>
      <ul className="trainer-team">
        {team.map((pokemon, index) => (
          <li key={`${pokemon.id}-${index}`}>
            <button
              type="button"
              className="trainer-pokemon"
              onClick={() => onSelectPokemon(pokemon)}
              title={`Ver detalhes de ${pokemon.name}`}
            >
              <PokemonImage
                id={pokemon.id}
                name={pokemon.name}
                className="trainer-pokemon-image"
              />
              <span className="trainer-pokemon-name">{pokemon.name}</span>
              <span className="trainer-pokemon-id">{formatId(pokemon.id)}</span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default TrainerCard
