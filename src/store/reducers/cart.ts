import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Product = {
    id: number
    preco: number
}

type DeliveryData = {
    receiver: string
    address: {
        description: string
        city: string
        zipCode: string
        number: number
        complement: string
    }
}

type CartState = {
    items: Product[]
    isOpen: boolean
    step: number
    deliveryData: DeliveryData
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    step: 0,
    deliveryData: {
        receiver: '',
        address: {
            description: '',
            city: '',
            zipCode: '',
            number: 0,
            complement: ''
        }
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            const item = state.items.find((p) => p.id === action.payload.id)
            if (!item) {
                state.items.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
        setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
            state.deliveryData = action.payload
        },
        clear: (state) => {
            state.items = []
            state.step = 0
            state.deliveryData = initialState.deliveryData
        }
    }
})

export const { add, remove, open, close, setStep, setDeliveryData, clear } =
    cartSlice.actions

export default cartSlice.reducer