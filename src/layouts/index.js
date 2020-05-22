import "../styles/global.scss"
import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery } from "gatsby"

import { Navbar, NavbarLayoutMulti, NavbarItem, MobileMenu } from "@custom-lib"

import { Controller, Scene } from "react-scrollmagic"

import Img from "gatsby-image"

import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import styled from "styled-components"

// Style alterations
const NavItemInner = styled.div`
  text-align: center;
  padding: 2px 4px;
  border-bottom: 3px transparent solid;
  .active-link & {
    border-bottom: 3px solid #0a98d8;
  }
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`

const PAGES = [
  { path: "/", name: "Home", desktop: true, mobile: true },
  { path: "/about-us", name: "About Us", desktop: true, mobile: true },
  { path: "/services", name: "Services", desktop: true, mobile: true },
  { path: "/our-clients", name: "Our Clients", desktop: true, mobile: true },
  { path: "/contact-us", name: "Contact Us", desktop: true, mobile: true },
]

const Logo = ({ data, progress }) => {
  const logo = progress ? data.logo : data.altLogo
  return <Img fluid={logo.childImageSharp.fluid} style={{ width: "70px" }} />
}

const MobileMenuWithContent = ({ isOpen }) => {
  return (
    <MobileMenu isOpen={isOpen}>
      {PAGES.filter(page => page.mobile).map(page => (
        <MenuLink key={page.path} to={page.path}>
          {page.name}
        </MenuLink>
      ))}
    </MobileMenu>
  )
}

const navbarMenuContent = () => {
  return PAGES.filter(page => page.desktop).map(page => (
    <MenuLink to={page.path} activeClassName="active-link" key={page.name}>
      <NavbarItem key={page.path}>
        <NavItemInner>{page.name}</NavItemInner>
      </NavbarItem>
    </MenuLink>
  ))
}

MobileMenuWithContent.propTypes = {
  isOpen: PropTypes.bool,
}

const Layout = ({ children }) => {
  const [burgerMenuIsActive, burgerMenuToggleActive] = useState(false)
  const openMenu = useRef()

  // close the menu when the page changes
  useEffect(() => {
    burgerMenuToggleActive(false)
  }, [children])

  // Close the mobile menu if the screen is resized while the menu is open
  useEffect(() => {
    const handleResize = () => burgerMenuToggleActive(false)
    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize)
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize)
    }
  })

  // ensure the main screen can't be scrolled when the menu is open
  useEffect(() => {
    let targetElement = openMenu
    if (burgerMenuIsActive) {
      disableBodyScroll(targetElement)
    } else {
      enableBodyScroll(targetElement)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [burgerMenuIsActive])

  const data = useStaticQuery(graphql`
    query SiteLogoQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      altLogo: file(relativePath: { eq: "alt-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Controller>
        <Scene classToggle="second-color" triggerHook="0" offset="50px">
          {progress => (
            <div>
              <Navbar
                style={{
                  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.125)",
                  letterSpacing: "1px",
                  paddingRight: "30px",
                  fontSize: "1em",
                }}
                burgerMenuStyle="spin"
                burgerMenuIsActive={burgerMenuIsActive}
                toggleMenu={() => burgerMenuToggleActive(!burgerMenuIsActive)}
              >
                <NavbarLayoutMulti
                  itemsPosition="right"
                  logoPosition="left"
                  logo={
                    <Link to="/">
                      <NavbarItem logo>
                        <Logo data={data} progress={progress} />
                      </NavbarItem>
                    </Link>
                  }
                  mobileMenu={
                    <MobileMenuWithContent isOpen={burgerMenuIsActive} />
                  }
                >
                  {navbarMenuContent()}
                </NavbarLayoutMulti>
              </Navbar>
            </div>
          )}
        </Scene>
      </Controller>
      {children}
    </ThemeProvider>
  )
}

export default Layout
