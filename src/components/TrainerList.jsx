import TrainerCard from './TrainerCard.jsx'
import '../css/TrainerList.css'

function TrainerList({ trainers, pokemon, onSelectPokemon }) {
  const findPokemon = (id) => pokemon.find((p) => p.id === id)

  return (
    <section>
      <h2 className="trainer-list-title">Treinadores</h2>
      <p className="trainer-list-subtitle">Clique em um Pokémon para ver seus detalhes.</p>
      <div className="trainer-list">
        {trainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            trainer={trainer}
            team={trainer.pokemonIds.map(findPokemon).filter(Boolean)}
            onSelectPokemon={onSelectPokemon}
          />
        ))}
      </div>
    </section>
  )
}

export default TrainerList
