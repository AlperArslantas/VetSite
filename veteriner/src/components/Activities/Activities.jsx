import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Activities.css'

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: 'Aşı Günü',
            description: 'Ücretsiz aşılama kampanyamız',
            image: '/activities/cat-4988408_1920.jpg'
        },
        {
            id: 2,
            title: 'Sokak Hayvanları Tedavi Günü',
            description: 'Sokak hayvanlarına ücretsiz bakım',
            image: '/activities/health-4385852_1920.jpg'
        },
        {
            id: 3,
            title: 'Pet Dostları Buluşması',
            description: 'Aylık pet sahipleri buluşması',
            image: '/activities/cat-4988408_1920.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === activities.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? activities.length - 1 : prevIndex - 1
        )
    }

    return (
        <section className="activities">
            <h2>Faaliyetlerimiz</h2>
            <div className="activities-slider">
                <button className="slider-button prev" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>
                <div className="activities-slide">
                    <img src={activities[currentIndex].image} alt={activities[currentIndex].title} />
                    <div className="activity-info">
                        <h3>{activities[currentIndex].title}</h3>
                        <p>{activities[currentIndex].description}</p>
                    </div>
                </div>
                <button className="slider-button next" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Activities
