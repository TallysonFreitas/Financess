import Chart from 'react-google-charts'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../Redux/store'
import TituloGradrient from '../../components/TituloGradient'
import GeraDados from '../../calc/Financess_Logica'

const Graphics = () => {
  const { salario, despesas, dividas, juros } = useSelector(
    (state: RootReducer) => {
      return state.valores
    }
  )

  const data = GeraDados()

  const usuarioVal = {
    capitalAcumulado: data[6][1],
    dividaRestante: data[6][2],
    dinheiroPotencial: Number(salario) - Number(despesas),
    jurosAcumulado: data[6][3]
  }

  const graphicsOptions = {
    title: 'Evolução Financeira',
    curveType: 'function',
    legend: { position: 'bottom' }
  }

  return (
    <section>
      <div className="container">
        <div className="text-center mb-5 fw-bold">
          <TituloGradrient>Analytics</TituloGradrient>
        </div>
        <div className="row">
          {/* Insights */}
          <div className="col-lg-6">
            <div className="d-flex justify-content-center">
              <h2 className="fw-semibold border-bottom border-3 border-success mb-3">
                <i className="bi bi-cash-coin text-success"></i> Insights
              </h2>
            </div>
            <p className="lead text-muted fw-medium fs-5 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              fugit!
            </p>
            {/* Cards */}
            <div className="row">
              <div className="col-6">
                {/* Card Capital Acumulado */}
                <div className="card text-center mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-coin text-success"></i> Capital
                      Acumulado
                    </h5>
                    <p className="card-text">
                      Após pagar suas dividas, é calculado qual o valor
                      acumulado do seu dinheiro
                    </p>
                    <small className="text-muted">
                      <s>R$ 0,00</s>
                    </small>
                    <p className="lead fw-bold">
                      {usuarioVal.capitalAcumulado.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </p>
                  </div>
                </div>

                {/* Card Divida Restante */}
                <div className="card text-center mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-coin text-danger"></i> Divida Restante
                    </h5>
                    <p className="card-text">
                      Valor restante das suas dívidas após 5 anos
                    </p>
                    <small className="text-muted">
                      <s>
                        {Number(dividas).toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </s>
                    </small>
                    <p className="lead fw-bold">
                      {usuarioVal.dividaRestante.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                {/* Card Dinheiro Potencial */}
                <div className="card text-center mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-coin text-primary"></i> Dinheiro de
                      Potencial
                    </h5>
                    <p className="card-text">
                      É o valor destinado aoo pagamento de dividas ou acumulo de
                      capital descontado as despesas
                    </p>
                    <small className="text-muted">
                      {Number(salario).toLocaleString('pt-br', {
                        currency: 'BRL'
                      })}{' '}
                      -
                      {Number(despesas).toLocaleString('pt-br', {
                        currency: 'BRL'
                      })}
                    </small>
                    <p className="lead fw-bold">
                      {usuarioVal.dinheiroPotencial.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </p>
                  </div>
                </div>
                {/* Card Juros */}
                <div className="card text-center mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-coin text-warning"></i> Valor
                      Potencial com Juros
                    </h5>
                    <p className="card-text">
                      Valor caso investido capital seja investido - {juros}%
                    </p>
                    <small className="text-muted">
                      <s>
                        {usuarioVal.capitalAcumulado.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </s>
                    </small>
                    <p className="lead fw-bold">
                      {usuarioVal.jurosAcumulado.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graphics */}
          <div className="col-lg-6">
            <div className="card text-center mb-3 pt-1 shadow">
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={graphicsOptions}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Monitor the reduction of your debt and the increase in your
                  capital
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  debitis.
                </p>
                <a href="/" className="btn btn-primary fw-semibold">
                  Make a new simulation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Graphics
