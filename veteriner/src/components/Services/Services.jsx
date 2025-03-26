import { FaStethoscope, FaSyringe, FaAmbulance, FaCut } from 'react-icons/fa'
import './Services.css'

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Genel Muayene',
            description: 'Kapsamlı sağlık kontrolü ve muayene hizmetleri',
            icon: <FaStethoscope size={40} />
        },
        {
            id: 2,
            title: 'Aşılama',
            description: 'Düzenli aşı takibi ve uygulaması',
            icon: <FaSyringe size={40} />
        },
        {
            id: 3,
            title: 'Acil Servis',
            description: '24 saat acil müdahale hizmeti',
            icon: <FaAmbulance size={40} />
        },
        {
            id: 4,
            title: 'Tıraş & Bakım',
            description: 'Profesyonel tıraş ve bakım hizmetleri',
            icon: <FaCut size={40} />
        }
    ]

    return (
        <section className="services" id="services">
            <h2>Hizmetlerimiz</h2>
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
