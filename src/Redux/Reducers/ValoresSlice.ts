import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = { salario: '', despesas: '', dividas: '' }

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
    }
  }
})

export default ValoresSlice.reducer
export const { alteraDespesas, alteraDividas, alteraSalario } =
  ValoresSlice.actions
