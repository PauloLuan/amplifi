import { theme } from '@pauloluan/shared'
import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { CommentsProvider } from './providers'
import { queryClient } from './services/queryClient'
import { GlobalStyles } from './styles/global'
import { CSSReset } from './styles/resetCSS'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CommentsProvider>
            <App />
          </CommentsProvider>
          <CSSReset />
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
