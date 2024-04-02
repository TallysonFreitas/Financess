import { STituloGradient } from './style'

const TituloGradrient = ({
  children,
  fontSize,
  gradient
}: {
  children: React.ReactNode
  fontSize?: string
  gradient?: string
}) => {
  return (
    <STituloGradient fontSize={fontSize} gradient={gradient}>
      {children}
    </STituloGradient>
  )
}

export default TituloGradrient
