import { useState } from 'react'
import { Container } from './styles'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'

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
            <a href='#' className='active'>
              <BurgerIcon />
              <span>
                Humbúrgueres
              </span>
            </a>
          </li>
          <li>
            <a href='#'>
              <PizzaIcon />
              <span>
                Pizzas
              </span>
            </a>
          </li>
          <li>
            <a href='#'>
              <SodaPopIcon />
              <span>
                Bebidas
              </span>
            </a>
          </li>
          <li>
            <a href='#'>
              <IceCreamIcon />
              <span>
                Sobremesas
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )

}
