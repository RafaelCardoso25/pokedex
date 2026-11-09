import PokemonCard from './PokemonCard.jsx'
import '../css/PokemonList.css'

function PokemonList({ pokemon, onSelectPokemon, onClearFilters }) {
  if (pokemon.length === 0) {
    return (
      <div className="empty-state">
        <img src="/favicon.svg" alt="" className="empty-state-icon" />
        <h2>Nenhum Pokémon encontrado</h2>
        <p>Tente pesquisar por outro nome ou ID, ou escolha outro tipo.</p>
        <button type="button" className="empty-state-btn" onClick={onClearFilters}>
          Limpar filtros
        </button>
      </div>
    )
  }

  return (
    <div className="pokemon-list">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelect={onSelectPokemon} />
      ))}
    </div>
  )
}

export default PokemonList
