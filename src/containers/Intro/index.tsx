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
              <p>
                Organize your{' '}
                <span className="text-primary border-bottom border-primary border-3">
                  financial life
                </span>{' '}
                easily!{' '}
              </p>
              Welcome to our finance website, your necessary tool to achieve{' '}
              <span className="text-success border-bottom border-3 border-success">
                financial stability and peace of mind
              </span>{' '}
              . We know managing your finances{' '}
              <span className="text-danger border-bottom border-3 border-danger">
                can be challenging
              </span>
              , but we&apos;re here to simplify the process for you.
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
