import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PostPage } from './pages/Post'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Posts/*" element={<PostPage />} />
    </Routes>
  )
}
