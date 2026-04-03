import { BannerContainer, Titulo, Tipo } from './styles'

type Props = {
    capa: string
    tipo: string
    titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
    <BannerContainer style={{ backgroundImage: `url(${capa})` }}>
        <div className="container">
            <Tipo>{tipo}</Tipo>
            <Titulo>{titulo}</Titulo>
        </div>
    </BannerContainer>
)

export default Banner