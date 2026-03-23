import { HeaderContainer, Logo } from './styles'
import logo from '../../images/logo.png'

const Header = () => (
    <HeaderContainer>
        <div className="container">
            <Logo src={logo} alt="efood" />
            <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
    </HeaderContainer>
)

export default Header