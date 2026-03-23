import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { open } from '../../store/reducers/cart'
import { HeaderBar, LinkRestaurantes, Carrinho } from './styles'
import logo from '../../images/logo.png'

const HeaderProfile = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootState) => state.cart)

    return (
        <HeaderBar>
            <div className="container">
                <LinkRestaurantes to="/">Restaurantes</LinkRestaurantes>
                <img src={logo} alt="efood" />
                <Carrinho onClick={() => dispatch(open())}>
                    {items.length} produto(s) no carrinho
                </Carrinho>
            </div>
        </HeaderBar>
    )
}

export default HeaderProfile