import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import DishList from '../../components/DishList'
import HeaderProfile from '../../components/HeaderProfile'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const Perfil = () => {
    const { id } = useParams()
    const { data: restaurante, isLoading } = useGetRestaurantQuery(id!)

    if (isLoading) return
    <div className="container">
        <h3>Carregando cardápio...</h3>
    </div>

    if (!restaurante) return <h3>Restaurante não encontrado</h3>

    return (
        <>
            <HeaderProfile />
            <Banner
                capa={restaurante.capa}
                tipo={restaurante.tipo}
                titulo={restaurante.titulo}
            />
            <DishList dishes={restaurante.cardapio} />
            <Footer />
        </>
    )
}

export default Perfil