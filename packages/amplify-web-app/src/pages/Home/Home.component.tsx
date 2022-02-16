import { Header } from '@pauloluan/shared'
import { Posts } from '../Posts'
import * as S from './Home.styles'
export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id' }: HomeProps) => {
  return (
    <S.Container data-testid={testId}>
      <Header />
      <Posts />
    </S.Container>
  )
}
