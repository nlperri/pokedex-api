import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/themes'
import { Router } from './router/Router'

export function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router />
      <div>Hello World</div>
    </ChakraProvider>
  )
}
