import { Posts, PostType } from '@pauloluan/shared'
import { useQuery } from 'react-query'
import { CommentsProvider } from '../../providers'
import { api } from '../../services/axios'
import * as S from './Home.styles'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id' }: HomeProps) => {
  const { data, isFetching } = useQuery<PostType[]>(
    'posts',
    async () => {
      const response = await api.get('posts')

      return response.data
    },
    {
      staleTime: 1000 * 60 // 1 minute
    }
  )

  return (
    <S.Container data-testid={testId}>
      {isFetching && <p>Carregando...</p>}
      <Posts posts={data} />
    </S.Container>
  )
}
