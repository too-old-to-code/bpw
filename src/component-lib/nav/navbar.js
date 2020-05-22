import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BurgerMenu } from "@custom-lib"

const Nav = styled.nav`
  z-index: 75;
  font-family: sans-serif;
  width: 100%;
  top: 0;
  left: 0;
  position: ${({ theme }) => theme.navbar.position};
  background: ${({ theme }) => theme?.navbar?.background || "#3b3939"};
  color: ${({ theme }) => theme?.navbar?.textColor || "grey"};
  height: ${({ theme }) => theme?.navbar?.height || "54px"};
  transition: all 0.3s;
  .second-color & {
    background: ${({ theme }) => theme.navbarAlt?.background};
    color: black ${({ theme }) => theme.navbarAlt?.color};
  }
`

export const Navbar = props => {
  return (
    <Nav style={props.style}>
      <BurgerMenu
        fixed={props.position === "fixed"}
        burgerStyle={props.burgerMenuStyle}
        isActive={props.burgerMenuIsActive}
        toggleOpen={props.toggleMenu}
      />
      {props.children}
    </Nav>
  )
}

Navbar.propTypes = {
  children: PropTypes.any,
  position: PropTypes.oneOf(["sticky", "fixed", "relative"]),
  burgerMenuIsActive: PropTypes.bool,
  burgerMenuStyle: PropTypes.string,
  toggleMenu: PropTypes.any,
  style: PropTypes.any,
}

Navbar.defaultProps = {
  position: "relative",
}
