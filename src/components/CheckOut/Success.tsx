import { useDispatch } from 'react-redux'
import { clear } from '../../store/reducers/cart'
import { Botao } from '../Dish/styles'
import { FormContainer } from './styles'

const Success = () => {
    const dispatch = useDispatch()

    return (
        <FormContainer>
            <h3>Pedido realizado - ORD87452</h3>
            <div style={{ marginBottom: '24px', lineHeight: '22px', fontSize: '14px' }}>
                <p style={{ marginBottom: '16px' }}>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                </p>
                <p style={{ marginBottom: '16px' }}>
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                </p>
                <p style={{ marginBottom: '16px' }}>
                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo a sua segurança e bem-estar.
                </p>
                <p>Aproveite sua refeição!</p>
            </div>
            <Botao type="button" onClick={() => dispatch(clear())}>
                Concluir
            </Botao>
        </FormContainer>
    )
}

export default Success