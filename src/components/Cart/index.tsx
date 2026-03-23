import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { close, remove, setStep } from '../../store/reducers/cart'

import Delivery from '../CheckOut/Delivery'
import Payment from '../CheckOut/Payment'
import Success from '../CheckOut/Success'

import { CartContainer, Overlay, Sidebar, Prices, CartItem } from './styles'
import { Botao } from '../Dish/styles'

const Cart = () => {
    const { isOpen, items, step } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={() => dispatch(close())} />
            <Sidebar>
                {step === 0 && (
                    <>
                        <ul>
                            {items.map((item) => (
                                <CartItem key={item.id}>
                                    <img src={item.foto} alt={item.nome} />
                                    <div>
                                        <h3>{item.nome}</h3>
                                        <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                    <button onClick={() => dispatch(remove(item.id))} type="button" />
                                </CartItem>
                            ))}
                        </ul>
                        <Prices>
                            <span>Valor total</span>
                            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                        </Prices>
                        <Botao onClick={() => dispatch(setStep(1))}>
                            Continuar com a entrega
                        </Botao>
                    </>
                )}

                {/* TELA 1: ENTREGA */}
                {step === 1 && <Delivery />}

                {/* TELA 2: PAGAMENTO */}
                {step === 2 && <Payment />}

                {/* TELA 3: SUCESSO */}
                {step === 3 && <Success />}
            </Sidebar>
        </CartContainer>
    )
}

export default Cart