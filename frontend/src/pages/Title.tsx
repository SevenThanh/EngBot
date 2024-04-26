import { Navbar, Hero, Footer, ExperienceSlide, LearnSlide } from "@/components/title_page"

export function Title() {
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
