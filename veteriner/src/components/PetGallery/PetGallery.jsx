import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './PetGallery.css'

const PetGallery = () => {
    const pets = [
        {
            id: 1,
            name: 'Pamuk',
            description: 'Tedavi sonrası mutlu bir şekilde evine döndü',
            image: '/pets/cat-4988408_1920.jpg'
        },
        {
            id: 2,
            name: 'Boncuk',
            description: 'Başarılı ameliyat sonrası iyileşme sürecinde',
            image: '/pets/health-4385852_1920.jpg'
        },
        {
            id: 3,
            name: 'Karamel',
            description: 'Düzenli kontrollerimizle sağlığına kavuştu',
            image: '/pets/cat-4988408_1920.jpg'
        },
        {
            id: 4,
            name: 'Duman',
            description: 'Aşıları tamamlandı, sağlıklı bir şekilde büyüyor',
            image: '/pets/cat-4988408_1920.jpg'
        }
    ]

    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 3

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            (prevIndex + 1) % (pets.length - visibleCount + 1)
        )
    }

    const prevSlide = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? pets.length - visibleCount : prevIndex - 1
        )
    }

    return (
        <section className="pet-gallery">
            <h2>Evcil Dostlarımız</h2>
            <div className="gallery-container">
                {pets.length > visibleCount && (
                    <button className="gallery-button prev" onClick={prevSlide}>
                        <FaChevronLeft />
                    </button>
                )}
                <div className="gallery-slider">
                    {pets.slice(startIndex, startIndex + visibleCount).map((pet) => (
                        <div key={pet.id} className="pet-card">
                            <img src={pet.image} alt={pet.name} />
                            <h3>{pet.name}</h3>
                            <p>{pet.description}</p>
                        </div>
                    ))}
                </div>
                {pets.length > visibleCount && (
                    <button className="gallery-button next" onClick={nextSlide}>
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </section>
    )
}

export default PetGallery
