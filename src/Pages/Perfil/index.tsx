import HeaderProfile from '../../components/HeaderProfile'
import Banner from '../../components/Banner'
import Dish from '../../components/Dish'
import { List, Container } from '../../components/DishList/styles'
import Footer from '../../components/Footer'
import pizza from '../../images/pizza.png'

const pratosMock = [
    {
        id: 1,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica pizza italiana com molho de tomate fresco, mozzarella de búfala e manjericão.',
        foto: pizza,
        porcao: 'de 2 a 3 pessoas',
        preco: 60.90
    },
    {
        id: 2,
        nome: 'Pizza Marguerita Especial',
        descricao: 'Versão especial com borda recheada e manjericão orgânico colhido na hora.',
        foto: pizza,
        porcao: 'de 2 a 3 pessoas',
        preco: 75.00
    },
    {
        id: 3,
        nome: 'Pizza Marguerita Individual',
        descricao: 'O sabor clássico em um tamanho ideal para quem quer aproveitar sozinho.',
        foto: pizza,
        porcao: '1 pessoa',
        preco: 35.00
    },
    {
        id: 4,
        nome: 'Pizza Marguerita Gourmet',
        descricao: 'Utiliza tomates pelados italianos e azeite trufado para um sabor inesquecível.',
        foto: pizza,
        porcao: 'de 2 a 3 pessoas',
        preco: 82.00
    },
    {
        id: 5,
        nome: 'Pizza Marguerita Tradicional',
        descricao: 'Receita que atravessa gerações com o verdadeiro equilíbrio de sabores.',
        foto: pizza,
        porcao: 'de 2 a 3 pessoas',
        preco: 58.00
    },
    {
        id: 6,
        nome: 'Pizza Marguerita Família',
        descricao: 'Nossa maior pizza, perfeita para reunir toda a família em volta da mesa.',
        foto: pizza,
        porcao: 'de 4 a 5 pessoas',
        preco: 95.00
    }
]

const Perfil = () => (
    <>
        <HeaderProfile />
        <Banner />
        <Container className="container">
            <List>
                {pratosMock.map((prato) => (
                    <li key={prato.id}>
                        <Dish
                            nome={prato.nome}
                            descricao={prato.descricao}
                            foto={prato.foto} preco={0} />
                    </li>
                ))}
            </List>
        </Container>
        <Footer />
    </>
)

export default Perfil