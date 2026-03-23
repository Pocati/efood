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
            const item = state.items.find((i) => i.id === action.payload.id)
            if (!item) {
                state.items.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        clear: (state) => {
            state.items = []
            state.step = 0
            state.isOpen = false
        }
    }
})

export const { add, remove, open, close, setStep, clear } = cartSlice.actions
export default cartSlice.reducer