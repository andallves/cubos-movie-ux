import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from "styled-components";

import {GlobalStyles} from "./core/styles/global-styles";
import {lightTheme} from "./core/styles/theme.ts";
import {AppRoutes} from "./routes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
)
