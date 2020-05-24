import React from "react"
import styled from "styled-components"
import { Timeline, Tween } from "react-gsap"

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

export const AppParallaxText = ({ text }) => {
  return (
    <ParallaxImageText>
      <Timeline>
        {text.map(({ words, animate, animation, color }) => {
          return animate ? (
            <Tween
              key={words}
              ease="Power2.easeIn"
              duration="1"
              from={animation === "slide" ? { xPercent: -150 } : { opacity: 0 }}
            >
              <div style={{ color }}>{words}</div>
            </Tween>
          ) : (
            <div style={{ color }}>{words}</div>
          )
        })}
      </Timeline>
    </ParallaxImageText>
  )
}
