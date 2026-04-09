import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { clear, close } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { Botao } from '../Dish/styles'
import { FormContainer } from './styles'

const Success = () => {
    const dispatch = useDispatch()
    const { deliveryData } = useSelector((state: RootState) => state.cart)
    const [, { data }] = usePurchaseMutation()

    const handleFinish = () => {
        dispatch(clear())
        dispatch(close())
    }

    return (
        <FormContainer>
            <h3>Pedido realizado - {data?.orderId}</h3>
            <p>
                Estamos felizes em informar que o pedido de <strong>{deliveryData.receiver}</strong> já está em preparação e será entregue em:
            </p>
            <p className="margin-top">
                {deliveryData.address.description}, {deliveryData.address.number} - {deliveryData.address.city} <br />
                CEP: {deliveryData.address.zipCode}
            </p>
            <p className="margin-top">
                Esperamos que desfrute de uma experiência gastronômica prazerosa. Bom apetite!
            </p>
            <div className="margin-top">
                <Botao onClick={handleFinish} type="button">
                    Concluir
                </Botao>
            </div>
        </FormContainer>
    )
}

export default Success