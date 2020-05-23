import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Controller, Scene } from "react-scrollmagic"

const InnerWrapper = styled.div`
  position: relative;
  transform: translateY(100px);
  transition: transform 0.6s, opacity 1s;
  opacity: 0;
  &.entered-viewport {
    transform: translateY(0);
    opacity: 1;
  }
`

export const PopIn = props => (
  <Controller>
    <Scene classToggle="entered-viewport" triggerHook="0.9" reverse={false}>
      <InnerWrapper>{props.children}</InnerWrapper>
    </Scene>
  </Controller>
)

PopIn.propTypes = {
  children: PropTypes.any,
}
