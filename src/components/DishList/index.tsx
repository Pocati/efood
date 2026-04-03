import Dish from '../Dish'
import { List } from './styles'

const DishList = ({ dishes }: { dishes: any[] }) => (
    <div className="container">
        <List>
            {dishes.map((prato) => (
                <li key={prato.id}>
                    <Dish
                        id={prato.id}
                        nome={prato.nome}
                        descricao={prato.descricao}
                        foto={prato.foto}
                        preco={prato.preco}
                        porcao={prato.porcao}
                    />
                </li>
            ))}
        </List>
    </div>
)

export default DishList