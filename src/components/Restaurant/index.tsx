import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Card, Content, HeaderCard, Infos } from './styles'
import estrela from '../../../public/estrela.png'

type Props = {
    id: number
    titulo: string
    avaliacao: number
    capa: string
    tipo: string
    destacado?: boolean
    descricao: string
}

const Restaurant = ({
    id,
    titulo,
    avaliacao,
    capa,
    tipo,
    destacado,
    descricao
}: Props) => (
    <Card>
        <img src={capa} alt={titulo} />
        <Infos>
            {destacado && <Tag>Destaque do dia</Tag>}
            <Tag>{tipo}</Tag>
        </Infos>
        <Content>
            <HeaderCard>
                <h3>{titulo}</h3>
                <div>
                    <span>{avaliacao}</span>
                    <img src={estrela} alt="Estrela" />
                </div>
            </HeaderCard>
            <p>{descricao}</p>
            <Link className="botao-saiba-mais" to={`/perfil/${id}`}>
                Saiba mais
            </Link>
        </Content>
    </Card>
)

export default Restaurant