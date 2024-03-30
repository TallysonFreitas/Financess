import styled from 'styled-components'

export const STituloGradient = styled.div`
  font-size: 4rem;
  text-transform: uppercase;
  background: linear-gradient(
    135deg,
    rgba(121, 21, 238, 1) 0%,
    rgba(88, 39, 146, 1) 33%,
    rgba(182, 34, 34, 1) 100%
  );
  background-size: 400% 100%;
  animation: gradient 8s linear infinite;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 900px) {
    font-size: 6rem;
  }

  @keyframes gradient {
    0% {
      background-position-x: 0%;
    }

    100% {
      background-position-x: 400%;
    }
  }
`
