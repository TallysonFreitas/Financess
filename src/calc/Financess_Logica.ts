import { useSelector } from 'react-redux'
import { RootReducer } from '../Redux/store'

function GeraDados() {
  const anoAtual = new Date().getFullYear()

  // Coletar Dados - salario, despesas, dividas, juros
  const { salario, despesas, dividas, juros } = useSelector(
    (state: RootReducer) => {
      return state.valores
    }
  )

  const dados = {
    salario: Number(salario),
    despesas: Number(despesas),
    dividas: Number(dividas),
    juros: Number(juros)
  }

  // Cria variavel de retorno final com o ano inicial
  const variacaoAnual: any = [
    {
      ano: String(anoAtual),
      montante: 0,
      dividas: dados.dividas,
      montanteJuros: 0
    }
  ]

  // Cria valores temporarios para Sistema de contagem
  let dividaTemp = dados.dividas
  let montanteTemp = 0
  const jurosMensal = (dados.juros * 0.01 + 1) ** (1 / 12)
  let jurosTemp = 0
  const dinheiroDiferencialTemp = dados.salario - dados.despesas

  // Sistema de contagem para cada ANO
  for (let ano = 1; ano <= 5; ano++) {
    for (let mes = 0; mes < 12; mes++) {
      if (dividaTemp > 0) {
        dividaTemp -= dinheiroDiferencialTemp
      } else {
        if (dividaTemp < 0) {
          montanteTemp -= dividaTemp
          dividaTemp = 0
        }
        // corre juros à variavel juros
        jurosTemp = Number((jurosTemp * jurosMensal).toFixed(2))

        montanteTemp += dinheiroDiferencialTemp
        jurosTemp += dinheiroDiferencialTemp
      }
    }

    // Adiciona valor do ano à variavel de variacao de cada ano
    variacaoAnual.push({
      ano: String(ano + anoAtual),
      montante: montanteTemp,
      dividas: dividaTemp,
      montanteJuros: jurosTemp
    })
  }

  // Parte do codigo destinada a formatacao do array para o grafico
  const dataBase: any = [['Ano', 'Dinheiro Acumulado', 'Dividas', 'Juros']]

  for (let i = 0; i <= 5; i++) {
    dataBase.push(Object.values(variacaoAnual[i]))
  }

  return dataBase
}

export default GeraDados
