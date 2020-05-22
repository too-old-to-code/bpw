import PropTypes from "prop-types"
import styled from "styled-components"

export const NavbarItem = styled.div.attrs(({ logo }) => ({
  className: logo ? "app-logo" : "",
}))`
  height: 100%;
  align-items: center;
  position: relative;
  padding: 0 20px;
  display: flex ${({ logo }) => (logo ? "!important" : "")};
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme?.navbar?.hoverTextColor || "grey"};
    background-color: ${({ theme }) => theme?.navbar?.hoverBackground};
  }
  &:hover:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${props => (props.hoverBorder ? `border-${props.hoverBorder}` : "")};
  }
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    display: none;
  }
`

NavbarItem.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  logo: PropTypes.bool,
  hoverBorder: PropTypes.string,
}
