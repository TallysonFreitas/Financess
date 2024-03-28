const Intro = () => {
  return (
    <section className="bg-light-subtle">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="text-center mb-5">
              <h2 className="text-dark fw-bold fs-1">Organize your</h2>
              <h2 className="fw-bold fs-1  text-primary">Personal finances</h2>
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
                <form></form>
              </div>
              <div className="modal-footer">
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
