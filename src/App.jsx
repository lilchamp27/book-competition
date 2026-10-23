import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Participant from './pages/Participant.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participant/:id" element={<Participant />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Tripoli Immigration Services.</footer>
    </div>
  )
}
