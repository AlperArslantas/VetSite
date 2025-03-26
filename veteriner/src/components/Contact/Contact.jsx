import './Contact.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>İletişim</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <h3>Telefon</h3>
                        <p>+90 555 123 4567</p>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <h3>E-posta</h3>
                        <p>info@veterinerklinik.com</p>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <h3>Adres</h3>
                        <p>Atatürk Caddesi No:123<br />Kadıköy, İstanbul</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Bize Ulaşın</h3>
                    <form>
                        <input type="text" placeholder="Adınız" required />
                        <input type="email" placeholder="E-posta Adresiniz" required />
                        <input type="tel" placeholder="Telefon Numaranız" />
                        <textarea placeholder="Mesajınız" required></textarea>
                        <button type="submit" className="submit-button">Gönder</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
