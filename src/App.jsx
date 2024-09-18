import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';


function App() {

  return (
    <Router>
      <div className="bg-gray-100 font-sans w-full">
        <Navbar />
        <main className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<h1> About Page </h1>} />
            <Route path="/projects" element={<h1> Project Page </h1>} />
            <Route path="/contacts" element={<h1> Contact Page </h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
