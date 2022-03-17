import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    AmaranthRed: '#D90429',
    ImperialRed: '#EF233C',
    Cultured: 'EDF2F4',
    Manatee: '#8D99AE',
    SpaceCadet: '#2B2D42',
    gold: {
      200: '#EE9B00'
    },
    silver: {
      200: '#7D8597'
    },
    white: {
      200: '#F8F9FA'
    },
    newRed: {
       50: '#E16866',
      100: '#DD5755',
      200: '#DA4644',
      300: '#D73533',
      400: '#CC2B28',
      500: '#BB2825',
      600: '#AA2422',
      700: '#99201E',
      800: '#881D1B',
      900: '#771918'
    }
     
  },

  config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    }
  
})



ReactDOM.render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
