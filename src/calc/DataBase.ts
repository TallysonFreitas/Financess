import CalculaValores from './CalculaValores'

function GeraDataBase() {
  const preload = CalculaValores()

  const anoAtual = new Date().getFullYear()

  const dataBase = {
    anos: [
      String(anoAtual),
      String(anoAtual + 1),
      String(anoAtual + 2),
      String(anoAtual + 3),
      String(anoAtual + 4),
      String(anoAtual + 5)
    ],
    valorDivida: preload.map((each) => {
      return each.dividas
    }),
    valorAcumulado: preload.map((each) => {
      return each.acumulado
    })
  }

  const arrValues = Object.values(dataBase)

  const data: any = []

  for (let i = 0; i <= arrValues[0].length; i++) {
    data[i] = arrValues.map((each) => {
      return each[i]
    })
  }

  const DataFinal = [['Ano', 'Dividas', 'Dinheiro Acumulado'], ...data]

  return DataFinal
}

export default GeraDataBase
