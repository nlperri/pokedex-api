import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blue: {
      100: '#71C3FF', // card water
      200: '#33A4F5', // button
      300: '#0A81D6', // button hover
      400: '#075E9C', // button active
      500: '#004170', // card azul escuro
    },
    green: {
      100: '#729F92', // card grass
      200: '#76A866', //card bug
    },

    red: {
      100: '#FF6262', //excluir button
      200: '#FF3333', //button hover
      300: '#E00000', //button active
    },
    brown: '#BF9762', //card normal
  },
  styles: {
    global: {
      body: {
        bg: '#5E5E5E',
        color: '#FFFFFF',
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})
