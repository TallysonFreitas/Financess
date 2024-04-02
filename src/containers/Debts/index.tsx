import ImgDebts from '../../assets/Dividas.jpg'
import TituloGradrient from '../../components/TituloGradient'
import FormModal from '../FormModal'

const Debts = () => {
  return (
    <section className="bg-light">
      <div className="container bg-dark p-5 rounded shadow">
        {/* Titulo */}
        <div className="text-center mb-5 text-light">
          <TituloGradrient gradient="90deg, rgba(200,178,0,1) 0%, rgba(201,0,0,1) 100%">
            <h2 className="fw-bold fs-3">
              <i className="bi bi-star-fill"></i> Conquiste sua liberdade
              financeira com facilidade! <i className="bi bi-star-fill"></i>
            </h2>
          </TituloGradrient>
        </div>
        {/* Content */}
        <div className="row flex-row-reverse align-items-center">
          <div className="col-lg-6">
            <div className="card text-center shadow">
              <div className="card-header">
                Você está pronto para se livrar das dívidas de uma vez por
                todas? Nós temos a solução perfeita para você! 💪💰
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Não deixe que as dívidas dominem sua vida.
                </h5>
                <p className="card-text">
                  <ol>
                    <li>
                      <strong>Visualizar sua situação financeira atual:</strong>{' '}
                      Obtenha uma visão clara de suas dívidas e suas condições
                      atuais.
                    </li>
                    <li>
                      <strong>
                        Criar um plano de pagamento personalizado:
                      </strong>{' '}
                      Nosso sistema inteligente calculará a melhor estratégia de
                      pagamento para você, levando em consideração seus
                      rendimentos e despesas.
                    </li>
                    <li>
                      <strong>Acompanhar seu progresso:</strong> Veja como cada
                      pagamento o aproxima cada vez mais da liberdade financeira
                      desejada.
                    </li>
                  </ol>
                </p>
                {/* Call to Action */}
                <FormModal />
              </div>
              <div className="card-footer text-body-secondary">2 days ago</div>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid rounded shadow" src={ImgDebts} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Debts
