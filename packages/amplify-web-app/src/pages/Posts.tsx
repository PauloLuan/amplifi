import { api } from '../services/axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { PostType } from '../interfaces'

export function Posts() {
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
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`posts/${post.id}`}>{post.id}</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        )
      })}
    </ul>
  )
}
