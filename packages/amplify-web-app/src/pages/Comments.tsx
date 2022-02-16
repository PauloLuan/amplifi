import { api } from '../services/axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { CommentType } from '../interfaces'

export function Comments({ postId }: { postId: string }) {
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
      {data?.map((comment) => {
        return (
          <li key={comment.id}>
            <Link to={`comments/${comment.id}`}>{comment.id}</Link>
            <h1>{comment.email}</h1>
            <p>{comment.body}</p>
          </li>
        )
      })}
    </ul>
  )
}
