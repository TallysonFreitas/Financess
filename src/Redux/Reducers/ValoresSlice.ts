import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  salario: '0.00',
  despesas: '0.00',
  dividas: '0.00',
  juros: '0.00',
  anos: '5'
}

const ValoresSlice = createSlice({
  name: 'ValoresSlice',
  initialState,
  reducers: {
    alteraSalario: (state, action: PayloadAction<string>) => {
      state.salario = action.payload
    },
    alteraDespesas: (state, action: PayloadAction<string>) => {
      state.despesas = action.payload
    },
    alteraDividas: (state, action: PayloadAction<string>) => {
      state.dividas = action.payload
    },
    alteraJuros: (state, action: PayloadAction<string>) => {
      state.juros = action.payload
    },
    alteraAnos: (state, action: PayloadAction<string>) => {
      state.anos = action.payload
    }
  }
})

export default ValoresSlice.reducer
export const {
  alteraDespesas,
  alteraDividas,
  alteraSalario,
  alteraJuros,
  alteraAnos
} = ValoresSlice.actions
