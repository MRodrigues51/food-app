import { Route, Routes } from 'react-router-dom'

import { Home } from './Pages/Home'
import BurgersPage from './Pages/Home/Burgers'
import PizzasPage from './Pages/Home/Pizzas'
import DrinksPage from './Pages/Home/Drinks'
import IceCreamsPage from './Pages/Home/IceCreams'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/drinks' element={<DrinksPage />} />
        <Route path='/ice-creams' element={<IceCreamsPage />} />
      </Route>
    </Routes>
  )
}
