import { FooterContainer, SectionSocial, Logo, Disclaimer } from './styles'
import logo from '../../images/logo.png'
import instagram from '../../images/Instagram.png'
import facebook from '../../images/Facebook.png'
import twitter from '../../images/Twitter.png'

const Footer = () => (
    <FooterContainer>
        <div className="container">
            <Logo src={logo} alt="efood" />
            <SectionSocial>
                <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
            </SectionSocial>
            <Disclaimer>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </Disclaimer>
        </div>
    </FooterContainer>
)

export default Footer