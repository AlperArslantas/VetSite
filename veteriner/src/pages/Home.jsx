import Hero from '../components/Hero/Hero'
import Activities from '../components/Activities/Activities'
import PetGallery from '../components/PetGallery/PetGallery'
import Services from '../components/Services/Services'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Activities />
            <PetGallery />
        </>
    )
}

export default Home
