import Tag from '../Tag'
import { Card, Imagem, Titulo, Nota, Descricao, Botao, Infos } from './styles'
import estrela from '../../../public/estrela.png'

type Props = {
    titulo: string
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    destacado?: boolean
}

const Restaurant = ({ titulo, tipo, avaliacao, descricao, capa, destacado }: Props) => (
    <Card>
        <Imagem style={{ backgroundImage: `url(${capa})` }}>
            <Infos>
                {destacado && <Tag>Destaque da semana</Tag>}
                <Tag>{tipo}</Tag>
            </Infos>
        </Imagem>
        <div className="container-interno">
            <div className="header-card">
                <Titulo>{titulo}</Titulo>
                <Nota>
                    <span>{avaliacao}</span>
                    <img src={estrela} alt="estrela" />
                </Nota>
            </div>
            <Descricao>{descricao}</Descricao>
            <Botao to="/perfil">Saiba mais</Botao>
        </div>
    </Card>
)

export default Restaurant