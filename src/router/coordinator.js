export const goToPokedex = (navigate) => {
  navigate('/pokedex')
}

export const goToPokemonDetail = (navigate, id) => {
  navigate(`/${id}`)
}

export const goToPokemonList = (navigate) => {
  navigate('/')
}
