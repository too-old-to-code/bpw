import styled from "styled-components"

export const ParallaxImageText = styled.div`
  padding-top: calc(${({ theme }) => theme?.navbar?.height} + 20px);
  font-family: "Teko";
  font-size: 4em;
  font-weight: bold;
  color: rgb(160, 216, 123);
  text-shadow: 0px 1px 1px black;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    font-size: 2.5em;
  }
`
