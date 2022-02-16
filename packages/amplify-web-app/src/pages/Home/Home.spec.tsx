import { renderWithTheme } from '@pauloluan/shared'
import { screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from '.'

// import theme from '../Theme'

test.skip('<Home />', () => {
  expect(true).toBe(true)

  // const queryClient = new QueryClient()
  // const Wrapper = ({ children }: any) => (
  //   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  // )
  // /**
  //  * @IMPORTANT: This test should be improved in order to nock
  //  * external requests in order to avoid real network calls
  //  */
  // it.skip('should render the Home component and find it by Test Id', () => {
  //   renderWithTheme(
  //     <Wrapper>
  //       <Home testId="component-home-id" />
  //     </Wrapper>
  //   )
  //   expect(screen.getByTestId(/Home/i)).toBeDefined()
  // })
})
