import styled from "styled-components"
export const Paragraph = styled.p`
  color: ${({ theme }) => theme?.textbox?.textColor};
  line-height: ${({ theme }) => theme?.textbox?.lineHeight};
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    text-align: justify;
  }
`
