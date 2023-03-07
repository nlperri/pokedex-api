import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { PokemonContextProvider } from '../contexts/PokemonContext'
import { PokedexPage } from '../pages/PokedexPage'
import { PokemonDetailPage } from '../pages/PokemonDetailPage'
import { PokemonListPage } from '../pages/PokemonListPage'

export function Router() {
  return (
    <BrowserRouter>
      <PokemonContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<PokemonListPage />} />
          <Route path='/pokemon/:name' element={<PokemonDetailPage />} />
          <Route path='/pokedex' element={<PokedexPage />} />
        </Routes>
      </PokemonContextProvider>
    </BrowserRouter>
  )
}
