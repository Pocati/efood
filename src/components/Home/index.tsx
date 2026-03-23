import sushi from '../../images/sushi.png'
import sobremesa from '../../images/sobremesa.png'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'

const restaurantes = [
    {
        id: 1,
        titulo: 'Hiwatori',
        destacado: true,
        tipo: 'Japonesa',
        avaliacao: 4.8,
        descricao: 'A cozinha japonesa clássica para os amantes de sushi e sashimi. Venha saborear o melhor da culinária oriental.',
        capa: sushi
    },
    {
        id: 2,
        titulo: 'La Dolce Vita',
        destacado: false,
        tipo: 'Italiana',
        avaliacao: 4.5,
        descricao: 'Massas artesanais e vinhos selecionados em um ambiente aconchegante que remete às vilas da Toscana.',
        capa: sobremesa
    },
    {
        id: 3,
        titulo: 'Hiwatori',
        destacado: true,
        tipo: 'Japonesa',
        avaliacao: 4.8,
        descricao: 'A cozinha japonesa clássica para os amantes de sushi e sashimi. Venha saborear o melhor da culinária oriental.',
        capa: sushi
    },
    {
        id: 4,
        titulo: 'La Dolce Vita',
        destacado: false,
        tipo: 'Italiana',
        avaliacao: 4.5,
        descricao: 'Massas artesanais e vinhos selecionados em um ambiente aconchegante que remete às vilas da Toscana.',
        capa: sobremesa
    },
    {
        id: 5,
        titulo: 'Hiwatori',
        destacado: true,
        tipo: 'Japonesa',
        avaliacao: 4.8,
        descricao: 'A cozinha japonesa clássica para os amantes de sushi e sashimi. Venha saborear o melhor da culinária oriental.',
        capa: sushi
    },
    {
        id: 6,
        titulo: 'La Dolce Vita',
        destacado: false,
        tipo: 'Italiana',
        avaliacao: 4.5,
        descricao: 'Massas artesanais e vinhos selecionados em um ambiente aconchegante que remete às vilas da Toscana.',
        capa: sobremesa
    }
]

const Home = () => (
    <>
        <Header />
        <div className="container">
            <RestaurantList restaurants={restaurantes} />
        </div>
        <Footer />
    </>
)

export default Home