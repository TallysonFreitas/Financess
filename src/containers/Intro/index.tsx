import TituloGradrient from '../../components/TituloGradient'

const Intro = () => {
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
      </div>
    </section>
  )
}

export default Intro
