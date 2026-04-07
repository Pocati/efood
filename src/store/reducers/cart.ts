import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    items: any[]
    isOpen: boolean
    step: number
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    step: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) => {
            const itemNoCarrinho = state.items.find((item) => item.id === action.payload.id)

            if (!itemNoCarrinho) {
                state.items.push(action.payload)
            } else {
                alert('Este prato já foi adicionado!')
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
        clear: (state) => {
            state.items = []
            state.step = 0
        }
    }
})

export const { add, remove, open, close, setStep, clear } = cartSlice.actions
export default cartSlice.reducer