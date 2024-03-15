export default function Hero() {
    return (
        <div className="w-full py-1/10 pl-1/5 pr-1/4 bg-gradient-to-r from-primary
                        to-background flex flex-row gap-24">
            <img src="" alt="ENGBOT MASCOT" className="h-[200px] w-[200px]" />
            <div className="max-w-1/2">
                <p className="text-4xl mb-6 leading-tight">
                    Not confident in your English? Engbot got you covered with
                    <strong> engaging real-life lessons </strong> tailored
                    <strong> just for you </strong>
                </p>
                <button className="px-8 py-4 rounded-lg bg-primary shadow">
                    Get Started
                </button>
            </div>
        </div>
    )
}
