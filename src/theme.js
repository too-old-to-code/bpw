const DEFAULT = "#718093"
const DEFAULT_HOVERED = "#556170"
const PRIMARY = "#273c75"
const PRIMARY_HOVERED = "#101932"
const INFO = "#00a8ff"
const INFO_HOVERED = "#007dbf"
const SUCCESS = "#4cd137"
const SUCCESS_HOVERED = "#37a425"
const WARNING = "#fbc531"
const WARNING_HOVERED = "#f2b304"
const DANGER = "#e84118"
const DANGER_HOVERED = "#af3011"
const LIGHT = "#f5f6fa"
const LIGHTISH = "#dcdde1"
const DARK = "#2f3640"
const DARKISH = "#353b48"

export const theme = {
  bpoints: [767, 900, 1024, 1200],
  breakpoints: {
    maxMobile: "767px",
    minDesktop: "768px",
  },
  textbox: {
    textColor: "#708080",
    headingColor: "#0A99D8",
    lineHeight: "1.4em",
  },
  colors: {
    default: DEFAULT,
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    danger: DANGER,
    light: LIGHT,
    lightish: LIGHTISH,
    dark: DARK,
    darkish: DARKISH,
  },
  buttons: {
    borderRadius: "0px",
    default: `
      background-color: ${DEFAULT};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DEFAULT_HOVERED};
      }
    `,
    primary: `
      background-color: ${PRIMARY};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${PRIMARY_HOVERED};
      }
    `,
    info: `
      background-color: ${INFO};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${INFO_HOVERED};
      }
    `,
    success: `
      background-color: ${SUCCESS};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${SUCCESS_HOVERED};
      }
    `,
    warning: `
      background-color: ${WARNING};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${WARNING_HOVERED};
      }
    `,
    danger: `
      background-color: ${DANGER};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DANGER_HOVERED};
      }
    `,
  },
  menu: {
    textColor: "white",
    // hoverTextColor: "yellow",
    background: "#06426A",
  },
  hamburger: {
    position: "right", // left or right
    color: "white",
    background: null,
  },
  hamburgerAlt: {
    color: "black",
  },
  navbarAlt: {
    textColor: "#303030",
    hoverTextColor: "inherit",
    background: "#FCFAFF",
    hoverBackground: null,
    backgroundSelected: "#2dbeff",
    height: "65px",
  },
  navbar: {
    position: "fixed",
    textColor: "#FCFAFF",
    hoverTextColor: "inherit",
    // background: "linear-gradient(rgba(0,0,0,.7),transparent)",
    background: "rgba(0,0,0,.2)",
    hoverBackground: null,
    backgroundSelected: "#2dbeff",
    height: "80px",
  },
  sidebar: {
    background: "#273c75",
    textColor: "grey",
    collapsedWidth: "55px",
    width: "300px",
  },
}
