import ImgDebts from '../../assets/Dividas.jpg'
import FormModal from '../FormModal'

const Debts = () => {
  return (
    <section className="bg-light">
      <div className="container">
        {/* Titulo */}
        <div className="text-center mb-5 text-danger">
          <h2 className="fw-bold fs-3">
            <i className="bi bi-star-fill"></i> Descubra o poder dos juros
            compostos! <i className="bi bi-star-fill"></i>
          </h2>
        </div>
        {/* Content */}
        <div className="row flex-row-reverse align-items-center">
          <div className="col-lg-6">
            <div className="card text-center shadow">
              <div className="card-header">
                Você já se perguntou como seu dinheiro pode crescer ao longo do
                tempo?
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Os juros compostos são a resposta! 💰✨
                </h5>
                <p className="card-text">
                  Quer aprender como funciona e ver seu dinheiro se multiplicar?
                  Junte-se a nós para explorar os incríveis benefícios dos juros
                  compostos e descubra como podem impulsionar sua riqueza!
                  Estamos oferecendo uma oportunidade única para você calcular
                  seus próprios juros compostos. Prepare-se para se surpreender
                  com o potencial de crescimento do seu dinheiro ao longo do
                  tempo. Visite nosso site e dê o primeiro passo para uma
                  jornada financeira mais próspera! 💼💡
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
