import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Redux/store'
import {
  alteraDespesas,
  alteraDividas,
  alteraJuros,
  alteraSalario
} from '../../Redux/Reducers/ValoresSlice'
import { useNavigate } from 'react-router-dom'

const FormModal = () => {
  const navigate = useNavigate()
  const { despesas, dividas, salario, juros } = useSelector(
    (state: RootReducer) => {
      return state.valores
    }
  )
  const dispatch = useDispatch()

  return (
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
                    value={salario}
                    onChange={(e) => {
                      dispatch(alteraSalario(e.target.value))
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
                    value={despesas}
                    onChange={(e) => {
                      dispatch(alteraDespesas(e.target.value))
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
                    value={dividas}
                    onChange={(e) => {
                      dispatch(alteraDividas(e.target.value))
                    }}
                    className="form-control"
                    placeholder="0,00"
                    aria-label="dividas"
                    aria-describedby="basic-addon3"
                    id="dividas"
                  />
                </div>
              </div>
              {/* Juros Input */}
              <div className="mb-3 w-50">
                <label htmlFor="jurosInput" className="form-label">
                  Juros
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    value={juros}
                    onChange={(e) => {
                      dispatch(alteraJuros(e.target.value))
                    }}
                    className="form-control"
                    placeholder="10%"
                    aria-label="jurosInput"
                    aria-describedby="basic-addon4"
                    id="jurosInput"
                  />
                  <span className="input-group-text" id="basic-addon4">
                    %
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger fw-semibold"
              data-bs-dismiss="modal"
              onClick={() => {
                navigate('/analytics')
              }}
            >
              Simular
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormModal
