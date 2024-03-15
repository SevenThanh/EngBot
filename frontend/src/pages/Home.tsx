import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-y-auto">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}
