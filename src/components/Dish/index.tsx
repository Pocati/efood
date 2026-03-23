import { useState } from 'react'
import closeIcon from '../../../public/close.png'
import { Card, Imagem, Titulo, Descricao, Botao, Modal, ModalContent } from './styles'
import pizza from '../../images/pizza.png'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
    foto: string
    nome: string
    descricao: string
    preco: number
}

const Dish = ({ foto, nome, descricao, preco }: Props) => {
    const [modalAberta, setModalAberta] = useState(false)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            add({
                id: Math.random(),
                foto,
                nome,
                preco,
                descricao
            })
        )
        dispatch(open())
        setModalAberta(false)
    }

    return (
        <>
            <Card>
                <Imagem src={pizza} alt={nome} />
                <Titulo>{nome}</Titulo>
                <Descricao>{descricao}</Descricao>
                <Botao onClick={() => setModalAberta(true)}>Mais detalhes</Botao>
            </Card>

            <Modal className={modalAberta ? 'visible' : ''}>
                <div className="overlay" onClick={() => setModalAberta(false)}></div>
                <ModalContent>
                    <img src={foto} alt={nome} />
                    <div>
                        <header>
                            <h4>{nome}</h4>
                            <img src={closeIcon} onClick={() => setModalAberta(false)} alt="Fechar" />
                        </header>
                        <p>{descricao}</p>
                        <p>Serve: de 2 a 3 pessoas</p>
                        <Botao onClick={addToCart}>Adicionar ao carrinho - R$ 60,90</Botao>
                    </div>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Dish