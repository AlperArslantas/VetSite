import { useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import './Appointment.css'

const Appointment = () => {
    const [formData, setFormData] = useState({
        ownerName: '',
        petName: '',
        petType: 'kedi',
        phone: '',
        email: '',
        date: '',
        time: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form gönderildi:', formData)
        // Burada form verilerini backend'e gönderebilirsiniz
    }

    return (
        <section className="appointment">
            <h2>Randevu Al</h2>
            <div className="appointment-container">
                <div className="appointment-image">
                    <img src="/appointment-image.jpg" alt="Veteriner Randevu" />
                </div>
                <form className="appointment-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <FaPaw className="form-icon" />
                        <h3>Randevu Bilgileri</h3>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ownerName">Sahibin Adı Soyadı</label>
                        <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            placeholder="Örn: Ahmet Yılmaz"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="petName">Evcil Hayvanın Adı</label>
                            <input
                                type="text"
                                id="petName"
                                name="petName"
                                value={formData.petName}
                                onChange={handleChange}
                                placeholder="Örn: Pamuk"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="petType">Hayvan Türü</label>
                            <select
                                id="petType"
                                name="petType"
                                value={formData.petType}
                                onChange={handleChange}
                                required
                            >
                                <option value="kedi">Kedi</option>
                                <option value="köpek">Köpek</option>
                                <option value="kuş">Kuş</option>
                                <option value="diğer">Diğer</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Telefon Numaranız"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="E-posta Adresiniz"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Randevu sebebi..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Randevu Oluştur</button>
                </form>
            </div>
        </section>
    )
}

export default Appointment
