export const goToPokedex = (navigate) => {
  navigate('/pokedex')
}

export const goToPokemonDetail = (navigate, name) => {
  navigate(`/pokemon/${name}`)
}

export const goToPokemonList = (navigate) => {
  navigate('/')
}
