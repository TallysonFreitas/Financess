import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = { salario: 0, despesas: 0, dividas: 0 }

const ValoresSlice = createSlice({
  name: 'ValoresSlice',
  initialState,
  reducers: {
    alteraSalario: (state, action: PayloadAction<number>) => {
      state.salario = action.payload
    },
    alteraDespesas: (state, action: PayloadAction<number>) => {
      state.despesas = action.payload
    },
    alteraDividas: (state, action: PayloadAction<number>) => {
      state.dividas = action.payload
    }
  }
})

export default ValoresSlice.reducer
export const { alteraDespesas, alteraDividas, alteraSalario } =
  ValoresSlice.actions
