import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
    restaurants: any[]
}

const RestaurantList = ({ restaurants }: Props) => (
    <List>
        {restaurants.map((res) => (
            <li key={res.id}>
                <Restaurant
                    titulo={res.titulo}
                    tipo={res.tipo}
                    avaliacao={res.avaliacao}
                    descricao={res.descricao}
                    capa={res.capa}
                    destacado={res.destacado}
                />
            </li>
        ))}
    </List>
)

export default RestaurantList