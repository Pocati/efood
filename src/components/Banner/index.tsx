import { Imagem, Titulo, Categoria } from './styles'

const Banner = () => (
    <Imagem style={{ backgroundImage: `url(https://via.placeholder.com/1440x280)` }}>
        <div className="container">
            <Categoria>Italiana</Categoria>
            <Titulo>La Dolce Vita Trattoria</Titulo>
        </div>
    </Imagem>
)

export default Banner