import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
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
  // Infos
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { despesas, dividas, juros, salario } = useSelector(
    (state: RootReducer) => {
      return state.valores
    }
  )

  // Modal

  const [show, setShow] = useState(false)

  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => setShow(true)

  // Form

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: any) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      navigate('/analytics')
    }

    setValidated(true)
  }

  return (
    <>
      <Button
        variant="outline-primary"
        className="fw-semibold"
        onClick={handleShowModal}
      >
        Make a simulation
      </Button>

      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Insert the following information</Modal.Title>
        </Modal.Header>
        {/* Form */}
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            {/* Wage */}
            <Row className="mb-3">
              <Form.Label>Wage:</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupWage">R$</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="0,00"
                  aria-describedby="inputGroupWage"
                  step={0.01}
                  min={0.01}
                  required
                  value={salario}
                  onChange={(e) => {
                    dispatch(alteraSalario(e.target.value))
                  }}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Invalid value
                </Form.Control.Feedback>
              </InputGroup>
            </Row>
            {/* Expenses */}
            <Row className="mb-3">
              <Form.Label>Expenses:</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupExpenses">R$</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="0,00"
                  aria-describedby="inputGroupExpenses"
                  step={0.01}
                  min={0}
                  required
                  value={despesas}
                  onChange={(e) => {
                    dispatch(alteraDespesas(e.target.value))
                  }}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Invalid value
                </Form.Control.Feedback>
              </InputGroup>
            </Row>
            {/* Debts */}
            <Row className="mb-3">
              <Form.Label>Debts:</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupDebts">R$</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="0,00"
                  aria-describedby="inputGroupDebts"
                  step={0.01}
                  min={0}
                  required
                  value={dividas}
                  onChange={(e) => {
                    dispatch(alteraDividas(e.target.value))
                  }}
                />
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Invalid value
                </Form.Control.Feedback>
              </InputGroup>
            </Row>
            {/* Frees */}
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFees">
                <Form.Label>Fees:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="number"
                    placeholder="0,00"
                    aria-describedby="inputGroupFees"
                    step={0.01}
                    min={0.01}
                    required
                    value={juros}
                    onChange={(e) => {
                      dispatch(alteraJuros(e.target.value))
                    }}
                  />
                  <InputGroup.Text id="inputGroupFees">%</InputGroup.Text>
                  <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid value
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button variant="danger" className="fw-semibold" type="submit">
              Simular
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FormModal
