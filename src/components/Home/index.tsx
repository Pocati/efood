import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
    const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

    if (isLoading) return <h3>Carregando restaurantes...</h3>

    return <RestaurantList restaurants={restaurantes || []} />
}

export default Home