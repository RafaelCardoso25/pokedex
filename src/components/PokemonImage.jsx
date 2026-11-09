import { useState } from 'react'
import { getPokemonImage } from '../utils/pokemon.js'

function PokemonImage({ id, name, className }) {
  const [failed, setFailed] = useState(false)

  return (
    <img
      className={`${className} ${failed ? 'image-fallback' : ''}`}
      src={failed ? '/favicon.svg' : getPokemonImage(id)}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default PokemonImage
