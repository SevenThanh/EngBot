import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
    return (
        <div className="w-screen h-full">
            <Navbar />
            <main className="w-screen h-full">
                <Hero />
            </main>
        </div>
    )
}
