import TituloGradrient from '../../components/TituloGradient'

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h1 className="fw-bold">
            <TituloGradrient>Financess</TituloGradrient>
          </h1>
          <h2 className="fw-bold">understand a little about us</h2>
        </div>
        <div className="row">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#whoAccordion"
                  aria-expanded="true"
                  aria-controls="whoAccordion"
                >
                  Who are We?
                </button>
              </h2>
              <div
                id="whoAccordion"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Introducing Financess: Your Gateway to Financial Wellness
                  Welcome to Financess, your ultimate destination for all things
                  finance. Whether you&apos;re a seasoned investor or just
                  starting your journey towards financial freedom, Financess has
                  you covered. With a user-friendly interface and a plethora of
                  resources, Financess empowers you to take control of your
                  financial future. From budgeting tools to investment guides,
                  our platform offers comprehensive solutions tailored to your
                  needs. Join our community of like-minded individuals and gain
                  access to expert advice, educational content, and interactive
                  features designed to enhance your financial literacy.
                  Don&apos;t let financial uncertainty hold you back. Visit
                  Financess today and embark on the path to a brighter financial
                  tomorrow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#whatAccordion"
                  aria-expanded="true"
                  aria-controls="whatAccordion"
                >
                  What We do?
                </button>
              </h2>
              <div
                id="whatAccordion"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus mollitia ipsum ipsa eum odit architecto! Delectus quia
                  eos ab cumque, maiores obcaecati nihil natus possimus
                  voluptatibus, illum repellendus et harum doloribus doloremque.
                  Neque ex saepe earum, necessitatibus aliquid quia fugit vero
                  cupiditate officia amet illo in fugiat veniam unde provident a
                  numquam asperiores fuga eos odio dolorum, tenetur non! Vitae
                  modi voluptatibus rem harum in tempore corporis labore, sint
                  laborum. Earum reprehenderit, facere perspiciatis unde quasi
                  quae consequuntur accusamus illo.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#trustAccodion"
                  aria-expanded="true"
                  aria-controls="trustAccodion"
                >
                  Can I trust in You?
                </button>
              </h2>
              <div
                id="trustAccodion"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi enim iste culpa et nisi perspiciatis esse a, ad
                  doloribus fuga corporis at doloremque deleniti, dolorem
                  temporibus consequuntur nemo deserunt aperiam sit cum beatae
                  voluptate veritatis vitae. Quidem doloremque rerum a omnis
                  necessitatibus magnam quisquam. Enim consectetur nisi dolores
                  iusto odio iste expedita quas repudiandae totam aut tenetur
                  fuga consequatur quaerat corrupti perspiciatis mollitia, animi
                  voluptate eius. Saepe tempore dolor voluptas quaerat ut, harum
                  inventore, rem suscipit ipsum aliquam debitis quis tempora
                  reiciendis dolorum incidunt sapiente doloribus ipsam quasi
                  sint non?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
