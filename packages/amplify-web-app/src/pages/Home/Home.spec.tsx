import { renderWithTheme } from '@pauloluan/shared'
import { screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from '.'

// import theme from '../Theme'

describe('<Home />', () => {
  const queryClient = new QueryClient()
  const Wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  it('should render the Home component and find it by Test Id', () => {
    renderWithTheme(
      <Wrapper>
        <Home testId="component-home-id" />
      </Wrapper>
    )
    expect(screen.getByTestId(/Home/i)).toBeDefined()
  })
})
