require("normalize.css")
require("typeface-teko")
const { theme } = require("./src/theme")
const { setConfiguration } = require("react-grid-system")

setConfiguration({
  gridColumns: 12,
  breakpoints: theme.bpoints,
})

console.log(theme)
