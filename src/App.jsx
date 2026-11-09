import { useMemo, useState } from 'react'
import data from './data/pokedex-data.json'
import useTheme from './hooks/useTheme.js'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import TypeFilter from './components/TypeFilter.jsx'
import PokemonList from './components/PokemonList.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import TrainerList from './components/TrainerList.jsx'
import './css/App.css'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [view, setView] = useState('pokedex')
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const availableTypes = useMemo(() => {
    const used = new Set(data.pokemon.flatMap((p) => p.types.map((t) => t.name)))
    return data.types.filter((t) => used.has(t.name))
  }, [])

  const filteredPokemon = useMemo(() => {
    const term = search.trim().toLowerCase().replace(/^#/, '')
    return data.pokemon.filter((pokemon) => {
      const matchesSearch =
        term === '' ||
        pokemon.name.toLowerCase().includes(term) ||
        (/^\d+$/.test(term) && pokemon.id === Number(term))
      const matchesType =
        selectedType === '' || pokemon.types.some((t) => t.name === selectedType)
      return matchesSearch && matchesType
    })
  }, [search, selectedType])

  function clearFilters() {
    setSearch('')
    setSelectedType('')
  }

  return (
    <div className="app">
      <Header
        view={view}
        onChangeView={setView}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="app-main">
        {view === 'pokedex' ? (
          <>
            <section className="controls">
              <SearchBar value={search} onChange={setSearch} />
              <TypeFilter
                types={availableTypes}
                selectedType={selectedType}
                onSelectType={setSelectedType}
              />
            </section>

            <p className="result-count">
              {filteredPokemon.length} de {data.pokemon.length} Pokémon
            </p>

            <PokemonList
              pokemon={filteredPokemon}
              onSelectPokemon={setSelectedPokemon}
              onClearFilters={clearFilters}
            />
          </>
        ) : (
          <TrainerList
            trainers={data.trainers}
            pokemon={data.pokemon}
            onSelectPokemon={setSelectedPokemon}
          />
        )}
      </main>

      {selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      <footer className="app-footer">
        Pokédex React + Vite · Dados em <code>src/data/pokedex-data.json</code>
      </footer>
    </div>
  )
}

export default App
