import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import { setStep, setDeliveryData } from '../../store/reducers/cart'
import { Botao } from '../Dish/styles'
import { FormContainer } from './styles'

const Delivery = () => {
    const dispatch = useDispatch()

    const form = useFormik({
        initialValues: {
            receiver: '',
            zipCode: '',
            address: '',
            city: '',
            number: '',
            complement: ''
        },
        validationSchema: Yup.object({
            receiver: Yup.string().min(5, 'Nome muito curto').required('Obrigatório'),
            zipCode: Yup.string().min(9, 'CEP inválido').required('Obrigatório'),
            address: Yup.string().required('Obrigatório'),
            city: Yup.string().required('Obrigatório'),
            number: Yup.string().required('Obrigatório'),
            complement: Yup.string()
        }),
        onSubmit: (values) => {
            dispatch(
                setDeliveryData({
                    receiver: values.receiver,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: Number(values.number),
                        complement: values.complement
                    }
                })
            )
            dispatch(setStep(2))
        }
    })

    return (
        <FormContainer>
            <h3>Entrega</h3>
            <form onSubmit={form.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                        type="text"
                        id="receiver"
                        name="receiver"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.receiver}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.address}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">Cidade</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.city}
                    />
                </div>

                <div className="flex-group">
                    <div className="form-group">
                        <label htmlFor="zipCode">CEP</label>
                        <IMaskInput
                            mask="00000-000"
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={form.values.zipCode}
                            onAccept={(value: string) => form.setFieldValue('zipCode', value)}
                            onBlur={form.handleBlur}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="number">Número</label>
                        <input
                            type="number"
                            id="number"
                            name="number"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.number}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                        type="text"
                        id="complement"
                        name="complement"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.complement}
                    />
                </div>

                <div className="margin-top">
                    <Botao type="submit">Continuar com o pagamento</Botao>
                    <Botao type="button" onClick={() => dispatch(setStep(0))}>
                        Voltar para o carrinho
                    </Botao>
                </div>
            </form>
        </FormContainer>
    )
}

export default Delivery