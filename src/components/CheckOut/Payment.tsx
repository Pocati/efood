import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { setStep } from '../../store/reducers/cart'
import { Botao } from '../Dish/styles'
import { FormContainer } from './styles'

const Payment = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootState) => state.cart)

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    return (
        <FormContainer>
            <h3>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input type="text" id="cardName" />
                </div>

                <div className="flex-group">
                    <div className="form-group" style={{ flex: 3 }}>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input type="text" id="cardNumber" />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" />
                    </div>
                </div>

                <div className="flex-group">
                    <div className="form-group">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input type="text" id="expiresMonth" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input type="text" id="expiresYear" />
                    </div>
                </div>

                <div className="margin-top">
                    <Botao type="button" onClick={() => dispatch(setStep(3))}>
                        Finalizar pagamento
                    </Botao>

                    <Botao type="button" onClick={() => dispatch(setStep(1))}>
                        Voltar para a edição de endereço
                    </Botao>
                </div>
            </form>
        </FormContainer>
    )
}

export default Payment