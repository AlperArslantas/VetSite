import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Kozan Veteriner Kliniği</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                <li><Link to="/hizmetler">Hizmetler</Link></li>
                <li><Link to="/randevu">Randevu Al</Link></li>
                <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
