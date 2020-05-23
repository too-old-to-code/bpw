import styled from "styled-components"

export const FlexBox = styled.div`
  display: flex;
  font-size: ${({ fontSize = "1.2em" }) => fontSize};
  flex-direction: ${({ direction = "column" }) => direction};
  align-items: ${({ align = "center" }) => align};
  justify-content: ${({ justify = "center" }) => justify};
  padding: ${({ verticalPad = 0, horizontalPad = 0 }) =>
    `${verticalPad}px ${horizontalPad}px`};
`
