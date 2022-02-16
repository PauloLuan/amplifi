import { Route, Routes } from 'react-router-dom'
import { PostPage } from './pages/Post'
import { Posts } from './pages/Posts'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/Posts/*" element={<PostPage />} />
    </Routes>
  )
}
