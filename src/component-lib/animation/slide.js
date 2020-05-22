import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

const SlideWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

// This component needs to be wrapped with a controller
export const Slide = props => {
  const { startPercent, endPercent, fromDirection } = props
  const [start, end] = ["top", "left"].includes(fromDirection)
    ? [startPercent * -1, endPercent * -1]
    : [startPercent, endPercent]

  return (
    <Controller>
      <Scene
        duration={props.duration}
        triggerHook={props.triggerHook}
        offset={props.offset || 0}
      >
        <Timeline wrapper={<SlideWrapper />}>
          <Tween
            // position="-=1"

            from={{
              yPercent: ["top", "bottom"].includes(fromDirection)
                ? Number(start)
                : 0,
              xPercent: ["right", "left"].includes(fromDirection)
                ? Number(start)
                : 0,
            }}
            to={{
              yPercent: ["top", "bottom"].includes(fromDirection)
                ? Number(end)
                : 0,
              xPercent: ["right", "left"].includes(fromDirection)
                ? Number(end)
                : 0,
            }}
          >
            <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
              {props.children}
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  )
}

Slide.propTypes = {
  duration: PropTypes.string,
  triggerHook: PropTypes.string,
  fromDirection: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  startPercent: PropTypes.string,
  endPercent: PropTypes.string,
  children: PropTypes.any,
  offset: PropTypes.string,
}
