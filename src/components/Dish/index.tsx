import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Card, Modal, ModalContent } from './styles'
import { Botao } from './styles'
import { Overlay } from '../Cart/styles'

import { CloseIcon } from './styles'

const Dish = ({ id, foto, nome, descricao, porcao, preco }: any) => {
    const [modalAberta, setModalAberta] = useState(false)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(add({ id, foto, nome, preco }))
        dispatch(open())
        setModalAberta(false)
    }

    return (
        <>
            <Card>
                <img src={foto} alt={nome} />
                <h3>{nome}</h3>
                <p>{descricao.substring(0, 150)}...</p>
                <Botao onClick={() => setModalAberta(true)}>Mais detalhes</Botao>
            </Card>

            {modalAberta && (
                <Modal className="visible">
                    <Overlay onClick={() => setModalAberta(false)} />
                    <ModalContent className="container">
                        <img src={foto} alt={nome} />
                        <div>
                            <header>
                                <h4>{nome}</h4>
                                <CloseIcon
                                    onClick={() => setModalAberta(false)} />
                            </header>
                            <p>{descricao}</p>
                            <p>Serve: {porcao}</p>
                            <Botao onClick={addToCart}>
                                Adicionar ao carrinho - R$ {preco.toFixed(2).replace('.', ',')}
                            </Botao>
                        </div>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}

export default Dish