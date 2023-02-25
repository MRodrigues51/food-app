import { Container } from './styles'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import menuImg from '../../assets/menu.svg'
export function Sidebar() {
  return (
    <Container>
      <button>
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
        </ul>
      </nav>
    </Container>
  )

}
