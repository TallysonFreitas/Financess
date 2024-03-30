import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = { salario: '', despesas: '', dividas: '', juros: '' }

const ValoresSlice = createSlice({
  name: 'ValoresSlice',
  initialState,
  reducers: {
    alteraSalario: (state, action: PayloadAction<string>) => {
      state.salario = action.payload.replace(/,/, '')
    },
    alteraDespesas: (state, action: PayloadAction<string>) => {
      state.despesas = action.payload
    },
    alteraDividas: (state, action: PayloadAction<string>) => {
      state.dividas = action.payload
    },
    alteraJuros: (state, action: PayloadAction<string>) => {
      state.juros = action.payload
    }
  }
})

export default ValoresSlice.reducer
export const { alteraDespesas, alteraDividas, alteraSalario, alteraJuros } =
  ValoresSlice.actions
