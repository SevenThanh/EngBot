import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="w-full py-1/10 px-1/10 bg-engbot-gradient
                        flex flex-row gap-24 justify-center">
            <img src="main.png" alt="ENGBOT MASCOT" className="object-scale-down" />
            <div className="max-w-1/2">
                <p className="text-4xl mb-6 leading-tight">
                    Not confident in your English? Engbot got you covered with
                    <strong> engaging real-life lessons </strong> tailored
                    <strong> just for you </strong>
                </p>
                <Link to="/get-started">
                    <button className="text-3xl px-8 py-4 rounded-lg bg-light-100 shadow">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    )
}
