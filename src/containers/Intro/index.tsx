import { useState } from 'react'
import TituloGradrient from '../../components/TituloGradient'

const Intro = () => {
  const [valores, setValores] = useState({
    salario: '',
    despesas: '',
    dividas: ''
  })

  return (
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="text-center mb-5">
              <h2 className="text-dark fw-bold fs-1">Organize your</h2>
              <h2 className="fw-bold">
                <TituloGradrient>Personal finances</TituloGradrient>
              </h2>
            </div>
            <p className="lead text-dark fs-4 fw-medium mb-5">
              Organize sua{' '}
              <span className="border-bottom border-2 border-primary text-primary">
                vida financeira
              </span>{' '}
              com facilidade! Bem-vindo ao nosso site de finanças, sua
              ferramenta indispensável para alcançar{' '}
              <span className="border-bottom border-2 border-success text-success">
                estabilidade e tranquilidade
              </span>{' '}
              financeira. Sabemos que gerenciar suas finanças pode ser{' '}
              <span className="border-bottom border-2 border-danger text-danger">
                desafiador
              </span>
              , mas estamos aqui para simplificar esse processo para você.
            </p>

            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalData"
              className="btn btn-outline-primary fw-semibold"
            >
              Fazer Simulacao
            </button>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="modalData"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Preencha as seguintes informacoes
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {/* Salario Input */}
                  <div className="mb-3">
                    <label htmlFor="salario" className="form-label">
                      Salário
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        R$
                      </span>
                      <input
                        type="number"
                        value={valores.salario}
                        onChange={(e) => {
                          setValores({
                            ...valores,
                            salario: e.target.value
                          })
                        }}
                        className="form-control"
                        placeholder="0,00"
                        aria-label="salario"
                        aria-describedby="basic-addon1"
                        id="salario"
                      />
                    </div>
                  </div>
                  {/* Despesas Input */}
                  <div className="mb-3">
                    <label htmlFor="despesas" className="form-label">
                      Despesas
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon2">
                        R$
                      </span>
                      <input
                        type="number"
                        value={valores.despesas}
                        onChange={(e) => {
                          setValores({
                            ...valores,
                            despesas: e.target.value
                          })
                        }}
                        className="form-control"
                        placeholder="0,00"
                        aria-label="despesas"
                        aria-describedby="basic-addon2"
                        id="despesas"
                      />
                    </div>
                  </div>
                  {/* Dívidas Input */}
                  <div className="mb-3">
                    <label htmlFor="dividas" className="form-label">
                      Dívidas
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon3">
                        R$
                      </span>
                      <input
                        type="number"
                        value={valores.dividas}
                        onChange={(e) => {
                          setValores({
                            ...valores,
                            dividas: e.target.value
                          })
                        }}
                        className="form-control"
                        placeholder="0,00"
                        aria-label="dividas"
                        aria-describedby="basic-addon3"
                        id="dividas"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                salario:{valores.salario}
                despesas:{valores.despesas}
                dividas:{valores.dividas}
                <button type="button" className="btn btn-danger fw-semibold">
                  Simular
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
