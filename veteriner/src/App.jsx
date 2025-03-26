import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import AppointmentPage from './pages/AppointmentPage'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/hizmetler" element={<ServicesPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/randevu" element={<AppointmentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App