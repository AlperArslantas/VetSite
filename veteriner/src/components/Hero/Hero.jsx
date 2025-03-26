import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Evcil Dostlarınız İçin Profesyonel Veteriner Hizmeti</h1>
        <p>Uzman kadromuz ve modern kliniğimizle evcil dostlarınızın sağlığı için buradayız.</p>
        <Link to="/randevu" className="cta-button">
          Randevu Al
        </Link>
      </div>
      <div className="hero-image">
        <img src="/public/clock-7696708_1280.jpg" alt="Veteriner Kliniği" />
      </div>
    </section>
  )
}

export default Hero
