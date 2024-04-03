import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
