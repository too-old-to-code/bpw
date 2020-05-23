import styled from "styled-components"

export const PaddedBox = styled.div`
  padding: ${({ vertical = 0, horizontal = 0 }) =>
    `${vertical}px ${horizontal}px`};
  margin: 0 auto;
  max-width: ${({ maxWidth = "inherit" }) => maxWidth};
`
