import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PokedexPage } from '../pages/PokedexPage'
import { PokemonDetailPage } from '../pages/PokemonDetailPage'
import { PokemonListPage } from '../pages/PokemonListPage'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokedexPage />} />
        <Route path='/:id' element={<PokemonDetailPage />} />
        <Route path='/list' element={<PokemonListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
