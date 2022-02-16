import { api } from '../services/axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Comments, CommentType } from '@pauloluan/shared'

export function CommentsSection({ postId }: { postId: string }) {
  const { data, isFetching } = useQuery<CommentType[]>(
    'comments',
    async () => {
      const response = await api.get(`posts/${postId}/comments`)

      return response.data
    },
    {
      staleTime: 1000 * 60 // 1 minute
    }
  )

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}

      <Comments comments={data} />
    </ul>
  )
}
