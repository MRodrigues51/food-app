
import { Router } from "./Router";
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { SnackProvider } from "./contexts/SnackContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
        <Normalize />
      </SnackProvider>
    </ThemeProvider>

  )
}

