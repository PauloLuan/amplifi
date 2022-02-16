import { ThemeProvider } from 'styled-components'
import { theme } from '@pauloluan/shared'

import { GlobalStyles } from '../packages/amplify-web-app/src/styles/global'
import { CSSReset } from '../packages/amplify-web-app/src/styles/resetCSS'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CSSReset />
      <Story />
    </ThemeProvider>
  )
]
