import { STituloGradient } from './style'

const TituloGradrient = ({
  children,
  fontSize
}: {
  children: string
  fontSize?: string
}) => {
  return <STituloGradient fontSize={fontSize}>{children}</STituloGradient>
}

export default TituloGradrient
