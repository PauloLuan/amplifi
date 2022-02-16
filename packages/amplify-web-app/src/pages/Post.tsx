import { useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { CommentsSection } from './Comments'
import { PostType } from '@pauloluan/shared'

export function PostPage() {
  const params = useParams()
  const postId = params['*'] as string
  const queryClient = useQueryClient()

  const getCachedPost = (postId: number) => {
    let currentPost
    const previousPosts = queryClient.getQueryData<PostType[]>('posts')
    if (previousPosts) {
      currentPost = previousPosts.find((post) => post.id === postId)
    }

    return currentPost
  }

  const post = getCachedPost(Number(postId))

  return (
    <div>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
      <CommentsSection postId={postId} />
    </div>
  )
}
