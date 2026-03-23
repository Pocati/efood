import { Imagem, Titulo, Categoria } from './styles'
import sobremesa from '../../images/sobremesa.png'

const Banner = () => (
    <Imagem style={{ backgroundImage: sobremesa }}>
        <div className="container">
            <Categoria>Italiana</Categoria>
            <Titulo>La Dolce Vita Trattoria</Titulo>
        </div>
    </Imagem>
)

export default Banner