import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import { type RootState } from '../../store'
import { setStep } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { Botao } from '../Dish/styles'
import { FormContainer } from './styles'

const Payment = () => {
    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
    const { items, deliveryData } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setStep(3))
        }
    }, [isSuccess, data, dispatch])

    const form = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: Yup.object({
            cardName: Yup.string().required('Obrigatório'),
            cardNumber: Yup.string().min(14, 'Número inválido').required('Obrigatório'),
            cvv: Yup.string().min(3, 'Inválido').max(3, 'Inválido').required('Obrigatório'),
            expiresMonth: Yup.string().required('Obrigatório'),
            expiresYear: Yup.string().required('Obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                products: items.map((item) => ({ id: item.id, price: item.preco })),
                delivery: deliveryData,
                payment: {
                    card: {
                        name: values.cardName,
                        number: values.cardNumber,
                        code: Number(values.cvv),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        }
                    }
                }
            })
        }
    })

    return (
        <FormContainer>
            <h3>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</h3>
            <form onSubmit={form.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                </div>

                <div className="flex-group">
                    <div className="form-group" style={{ flex: 3 }}>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <IMaskInput
                            mask="0000-0000-0000-0000"
                            id="cardNumber"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onAccept={(value: string) => form.setFieldValue('cardNumber', value)}
                            onBlur={form.handleBlur}
                        />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                        <label htmlFor="cvv">CVV</label>
                        <IMaskInput
                            mask="000"
                            id="cvv"
                            name="cvv"
                            value={form.values.cvv}
                            onAccept={(value: string) => form.setFieldValue('cvv', value)}
                            onBlur={form.handleBlur}
                        />
                    </div>
                </div>

                <div className="flex-group">
                    <div className="form-group">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <IMaskInput
                            mask="00"
                            id="expiresMonth"
                            name="expiresMonth"
                            value={form.values.expiresMonth}
                            onAccept={(value: string) => form.setFieldValue('expiresMonth', value)}
                            onBlur={form.handleBlur}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <IMaskInput
                            mask="00"
                            id="expiresYear"
                            name="expiresYear"
                            value={form.values.expiresYear}
                            onAccept={(value: string) => form.setFieldValue('expiresYear', value)}
                            onBlur={form.handleBlur}
                        />
                    </div>
                </div>

                <div className="margin-top">
                    <Botao type="submit" disabled={isLoading}>
                        {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                    </Botao>
                    <Botao type="button" onClick={() => dispatch(setStep(1))}>
                        Voltar para o endereço
                    </Botao>
                </div>
            </form>
        </FormContainer>
    )
}

export default Payment