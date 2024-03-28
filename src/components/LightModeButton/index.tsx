import { StyledLabel } from './style'

const LightModeButton = () => {
  return (
    <StyledLabel className="ms-2">
      <input type="checkbox" />
      <span className="slider"></span>
    </StyledLabel>
  )
}

export default LightModeButton
