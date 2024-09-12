import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/inter';

export const themeApp = extendTheme({
  fonts: {
    body: `'Inter Variable', sans-serif`,
    heading: `'Inter Variable', sans-serif`,
  },
})