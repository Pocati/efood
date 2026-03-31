import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {
    const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

    if (isLoading) return <div className="container"><h3>Carregando...</h3></div>

    return (
        <>
            <Header />
            <RestaurantList restaurants={restaurantes || []} />
            <Footer />
        </>
    )
}

export default Home