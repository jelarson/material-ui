import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './components/app'
import theme from './components/theme'

function main() {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
    document.querySelector('.app-wrapper')
  )
}

document.addEventListener('DOMContentLoaded', main)
