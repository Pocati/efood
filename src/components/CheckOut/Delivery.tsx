import { useDispatch } from 'react-redux'
import { setStep } from '../../store/reducers/cart'
import { Botao } from '../Dish/styles'
import { FormContainer } from './styles'

const Delivery = () => {
    const dispatch = useDispatch()

    return (
        <FormContainer>
            <h3>Entrega</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input type="text" id="receiver" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" />
                </div>
                <div className="flex-group">
                    <div className="form-group">
                        <label htmlFor="cep">CEP</label>
                        <input type="text" id="cep" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Número</label>
                        <input type="text" id="number" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input type="text" id="complement" />
                </div>

                <div className="margin-top">
                    <Botao type="button" onClick={() => dispatch(setStep(2))}>
                        Continuar com o pagamento
                    </Botao>
                    <Botao type="button" onClick={() => dispatch(setStep(0))}>
                        Voltar para o carrinho
                    </Botao>
                </div>
            </form>
        </FormContainer>
    )
}

export default Delivery