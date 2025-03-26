import './Testimonials.css'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Ayşe Yılmaz',
            comment: 'Kedim Pamuk için gösterdikleri özen ve ilgi muhteşemdi. Çok teşekkür ederim.',
            pet: 'Kedi',
            image: '/testimonials/client1.jpg'
        },
        {
            id: 2,
            name: 'Mehmet Demir',
            comment: 'Köpeğimin acil durumunda 24 saat hizmet vermeleri hayat kurtarıcı oldu.',
            pet: 'Köpek',
            image: '/testimonials/client2.jpg'
        },
        {
            id: 3,
            name: 'Zeynep Kaya',
            comment: 'Profesyonel ekip ve temiz ortam. Kesinlikle tavsiye ediyorum.',
            pet: 'Kedi',
            image: '/testimonials/client3.jpg'
        }
    ]

    return (
        <section className="testimonials">
            <h2>Müşteri Yorumları</h2>
            <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p className="pet-type">{testimonial.pet} Sahibi</p>
                        <p className="comment">"{testimonial.comment}"</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
