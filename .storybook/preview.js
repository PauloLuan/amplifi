import { ThemeProvider } from 'styled-components'
import { theme, CSSReset } from '@pauloluan/shared'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]
