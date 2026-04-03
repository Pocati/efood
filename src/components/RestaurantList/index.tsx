import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
    restaurants: any[]
}

const RestaurantList = ({ restaurants }: Props) => (
    <div className="container">
        <List>
            {restaurants.map((res) => (
                <li key={res.id}>
                    <Restaurant
                        id={res.id}
                        titulo={res.titulo}
                        capa={res.capa}
                        avaliacao={res.avaliacao}
                        descricao={res.descricao}
                        tipo={res.tipo}
                        destacado={res.destacado}
                    />
                </li>
            ))}
        </List>
    </div>
)

export default RestaurantList