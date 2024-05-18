import { extendTheme } from "@chakra-ui/react";

import borders from "./borders";
import breakpoints from "./breakpoints";
import colors from "./colors";
import components from "./components";
import global from "./global";
import opacity from "./opacity";
import radii from "./radius";
import shadows from "./shadows";
import sizes from "./sizes";
import typography from "./typography";
import zIndices from "./zIndices";

const theme = extendTheme({
  components,
  ...typography,
  borders,
  breakpoints,
  colors,
  opacity,
  radii,
  shadows,
  sizes,
  space: sizes,
  zIndices,
  styles: {
    global,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
