export const goToPokedex = (navigate) => {
  navigate('/')
}

export const goToPokemonDetail = (navigate, id) => {
  navigate(`/${id}`)
}

export const goToPokemonList = (navigate) => {
  navigate('/list')
}
