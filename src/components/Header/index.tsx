import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/categories">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/categories">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart onClick={openCart}>
        {itens.length} - produto(s)
        <img src={carrinho} alt="carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
