import { createContext, useContext, useState } from 'react'
import { CommentType } from '../interfaces'
import { api } from '../services/axios'

interface CommentsProviderProps {
  children: React.ReactNode
}

type CommentFormType = Pick<CommentType, 'postId' | 'name' | 'email' | 'body'>

interface CommentsContextData {
  comments: CommentType[]
  fetchComments: (postId: string) => Promise<void>
  addComment: (data: CommentFormType) => Promise<void>
}

const CommentsContext = createContext<CommentsContextData>(
  {} as CommentsContextData
)

export const CommentsProvider = ({ children }: CommentsProviderProps) => {
  const [comments, setComments] = useState<CommentType[]>([])

  const fetchComments = async (postId: string) => {
    const endpoint = `posts/${postId}/comments`
    const remoteComments = await api.get(endpoint)
    setComments(remoteComments.data.comments)
  }

  const addComment = async (data: CommentFormType) => {
    const endpoint = `posts/${data.postId}/comments`
    const response = await api.post(endpoint, data)
    const { comment } = response.data
    setComments([...comments, comment])
  }

  return (
    <CommentsContext.Provider value={{ comments, fetchComments, addComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export const useComments = () => {
  const context = useContext(CommentsContext)
  return context
}
