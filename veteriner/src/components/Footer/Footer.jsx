import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>VeterinerKlinik</h3>
                    <p>Evcil dostlarınızın sağlığı için 7/24 hizmetinizdeyiz.</p>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Hızlı Bağlantılar</h3>
                    <ul>
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link to="/hizmetler">Hizmetler</Link></li>
                        <li><Link to="/randevu">Randevu Al</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>İletişim</h3>
                    <p><FaPhone /> +90 555 123 4567</p>
                    <p><FaEnvelope /> info@veterinerklinik.com</p>
                    <p>Atatürk Caddesi No:123, Kadıköy/İstanbul</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 VeterinerKlinik. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    )
}

export default Footer
