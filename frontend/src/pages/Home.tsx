import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ExperienceSlide from '@/components/ExperienceSlide'
import LearnSlide from '@/components/LearnSlide'

export function Home() {
    return (
        <div className="w-screen h-screen overflow-y-auto">
            <Navbar />
            <Hero />
            <Footer />
            <ExperienceSlide />
            <LearnSlide />
        </div>
    )
}
