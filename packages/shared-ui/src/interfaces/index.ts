export type PostType = {
  userId: string
  id: string
  title: string
  body: string
}

export type CommentType = {
  postId: string
  id: string
  name: string
  email: string
  body: string
}
