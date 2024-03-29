import { useSelector } from 'react-redux'
import { RootReducer } from '../Redux/store'

export type anosValoresTypeObj = {
  ano: number
  dividas: number
  acumulado: number
}

function CalculaValores() {
  const { despesas, dividas, salario } = useSelector((state: RootReducer) => {
    return state.valores
  })

  const valores = {
    despesas: Number(despesas),
    dividas: Number(dividas),
    salario: Number(salario)
  }

  if (salario < despesas) {
    window.alert(
      'Como seu salario é menor que o seu gasto mensal com despesas, Voce nunca zerará sua divida'
    )
  }

  // valor acumulado
  let DinheiroAcumulado = 0

  // extrai o valor atual da divida
  let dividasAtivas = valores.dividas

  // Array para valor de cada ano
  const anosValores: anosValoresTypeObj[] = [
    {
      ano: 0,
      dividas: dividasAtivas,
      acumulado: DinheiroAcumulado
    }
  ]

  for (let ano = 1; ano <= 5; ano++) {
    // calcula a cada 12 meses
    for (let meses = 0; meses < 12; meses++) {
      // se a divida ainda nao foi zerada
      if (dividasAtivas > 0) {
        dividasAtivas += -valores.salario + valores.despesas
      } else {
        DinheiroAcumulado += valores.salario - valores.despesas
      }
    }

    // caso o valor da divida fique negativo, ajusta para zero e passa o valor para o acumulado
    if (dividasAtivas < 0) {
      DinheiroAcumulado -= dividasAtivas
      dividasAtivas = 0
    }
    anosValores.push({
      ano: ano,
      dividas: dividasAtivas,
      acumulado: DinheiroAcumulado
    })
  }

  return anosValores
}

export default CalculaValores
