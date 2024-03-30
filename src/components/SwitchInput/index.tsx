import { StyleSwitch } from './style'

const SwitchInput = () => {
  return (
    <StyleSwitch className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </StyleSwitch>
  )
}

export default SwitchInput
