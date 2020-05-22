import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const RIGHT = "right"
const LEFT = "left"
const CENTER = "center"

const NavbarInnerWrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    ${({ logoPosition, theme }) =>
      logoPosition !== CENTER && logoPosition === theme?.hamburger?.position
        ? `margin-${logoPosition}: 55px;` // width of burger menu
        : ""}
  }
`

const Items = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  ${props => {
    if (props.position === RIGHT) {
      return `
        position: absolute;
        right: 0;
      `
    } else if (props.position === LEFT) {
      return `
        position: absolute;
        left: 0;
      `
    } else if (props.position === CENTER) {
      return `
        justify-content: center;
        width: 100%;
      `
    }
  }}
`

function centerLogo(items, logo) {
  // let a = React.Children.toArray(items)
  // console.log(a)
  const midElement = Math.floor(items.length / 2)
  return (
    <React.Fragment>
      {items.slice(0, midElement)}
      {logo}
      {items.slice(midElement)}
    </React.Fragment>
  )
}

export const NavbarLayoutMulti = ({
  burgerMenu,
  logoPosition,
  logo,
  itemsPosition,
  children,
  mobileMenu,
}) => {
  return (
    <NavbarInnerWrapper logoPosition={logoPosition}>
      {burgerMenu}
      {mobileMenu}
      {itemsPosition === logoPosition ? (
        <Items position={logoPosition}>
          {logoPosition === LEFT ? (
            <React.Fragment>
              {logo}
              {children}
            </React.Fragment>
          ) : logoPosition === RIGHT ? (
            <React.Fragment>
              {children}
              {logo}
            </React.Fragment>
          ) : (
            centerLogo(children, logo)
          )}
        </Items>
      ) : (
        <React.Fragment>
          <Items key="logo" position={logoPosition}>
            {logo}
          </Items>
          <Items key="items" position={itemsPosition}>
            {children}
          </Items>
        </React.Fragment>
      )}
    </NavbarInnerWrapper>
  )
}

NavbarLayoutMulti.propTypes = {
  children: PropTypes.any,
  logo: PropTypes.any,
  itemsPosition: PropTypes.oneOf([RIGHT, CENTER, LEFT]),
  logoPosition: PropTypes.oneOf([RIGHT, CENTER, LEFT]),
  burgerMenu: PropTypes.any,
  mobileMenu: PropTypes.any,
}

NavbarLayoutMulti.defaultProps = {
  itemsPosition: RIGHT,
  logoPosition: LEFT,
}
