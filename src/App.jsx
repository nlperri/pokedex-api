import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/themes'
import { Router } from './router/Router'
import { Header } from './components/Header'

export function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router />
    </ChakraProvider>
  )
}
