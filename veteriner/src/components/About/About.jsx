import { FaUserMd, FaHospital, FaClock, FaPaw } from 'react-icons/fa'
import './About.css'

const About = () => {
    const stats = [
        {
            id: 1,
            icon: <FaUserMd />,
            number: '10+',
            text: 'Uzman Veteriner'
        },
        {
            id: 2,
            icon: <FaHospital />,
            number: '15',
            text: 'Yıllık Tecrübe'
        },
        {
            id: 3,
            icon: <FaClock />,
            number: '24/7',
            text: 'Hizmet'
        },
        {
            id: 4,
            icon: <FaPaw />,
            number: '1000+',
            text: 'Mutlu Hasta'
        }
    ]

    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>Hakkımızda</h2>
                    <p>
                        2009 yılından bu yana İstanbul'da hizmet veren kliniğimiz,
                        evcil dostlarınızın sağlığı için en modern ekipmanlar ve
                        uzman kadrosuyla çalışmaktadır.
                    </p>
                    <p>
                        Amacımız, her hastamıza özel ve kaliteli veterinerlik hizmeti
                        sunarak, onların sağlıklı ve mutlu bir yaşam sürmelerini sağlamaktır.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/about-image.jpg" alt="Veteriner Kliniği" />
                </div>
            </div>

            <div className="stats-container">
                {stats.map(stat => (
                    <div key={stat.id} className="stat-item">
                        <div className="stat-icon">{stat.icon}</div>
                        <h3>{stat.number}</h3>
                        <p>{stat.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About
