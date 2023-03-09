import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/themes'
import { Router } from './router/Router'
import './styles.css'

export function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router />
    </ChakraProvider>
  )
}
