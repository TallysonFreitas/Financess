import ImgDebts from '../../assets/Juros.png'
import FormModal from '../FormModalBoth'

const Debts = () => {
  return (
    <section className="bg-white">
      <div className="container bg-dark p-5 rounded shadow-lg">
        {/* Titulo */}
        <div className="text-center mb-5 text-light">
          <h2 className="fw-bold fs-3">
            <i className="bi bi-star-fill"></i> Conquiste sua liberdade
            financeira com facilidade! <i className="bi bi-star-fill"></i>
          </h2>
        </div>
        {/* Content */}
        <div className="row flex-md-row flex-row-reverse align-items-center">
          <div className="col-lg-6">
            <img className="img-fluid" src={ImgDebts} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="card text-start shadow">
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
        </div>
      </div>
    </section>
  )
}

export default Debts
