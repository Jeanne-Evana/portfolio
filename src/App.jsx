import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Contact from './pages/Contact'
import Solarpunk from './pages/Solarpunk'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="surprise" element={<Solarpunk />} />
    </Routes>
  )
}
