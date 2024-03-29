import Chart from 'react-google-charts'
import GeraDataBase from '../../calc/DataBase'

const Graphics = () => {
  const data = GeraDataBase()

  const graphicsOptions = {
    title: 'Evolução Financeira',
    curveType: 'function',
    legend: { position: 'bottom' }
  }

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className="fs-1 fw-bold">Analytics</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-3 pt-1">
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={graphicsOptions}
              />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-3 pt-1">
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={graphicsOptions}
              />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
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
