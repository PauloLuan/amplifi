import { useState } from 'react'

export const useCommentModal = () => {
  const [commentModalIsOpen, setCommentModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setCommentModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setCommentModalIsOpen(false)
  }

  return { commentModalIsOpen, handleOpenModal, handleCloseModal }
}
