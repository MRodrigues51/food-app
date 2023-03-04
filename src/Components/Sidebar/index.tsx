import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'
import menuImg from '../../assets/menu.svg'
import BurgerIcon from '../../assets/Icons/BurgerIcon'
import PizzaIcon from '../../assets/Icons/PizzaIcon'
import DrinkIcon from '../../assets/Icons/DrinkIcon'
import IceCreamIcon from '../../assets/Icons/IceCream'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='menu abrir e fechar' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurgerIcon />
              <span>
                Humbúrgueres
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>
                Pizzas
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to='drinks'>
              <DrinkIcon />
              <span>
                Bebidas
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to='ice-creams'>
              <IceCreamIcon />
              <span>
                Sorvetes
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )

}
