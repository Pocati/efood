import Dish from '../Dish'
import { List, Container } from './styles'

type Props = {
    dishes: any[]
}

const DishList = ({ dishes }: Props) => (
    <Container className="container">
        <List>
            {dishes.map((dish) => (
                <li key={dish.id}>
                    <Dish
                        nome={dish.nome}
                        descricao={dish.descricao}
                        foto={dish.foto} preco={0} />
                </li>
            ))}
        </List>
    </Container>
)

export default DishList