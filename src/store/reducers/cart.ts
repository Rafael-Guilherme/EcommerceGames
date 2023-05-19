import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  itens: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.itens.find((item) => item.id === action.payload.id)
      if (!game) {
        state.itens.push(action.payload)
      } else {
        alert('O jogo já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
