import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
