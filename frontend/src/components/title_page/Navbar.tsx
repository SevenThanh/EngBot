import { Icon } from './Icon'
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="h-24 w-full p-6 flex flex-row justify-between">
            <Icon />
            <Link to="/login" className="flex flex-row items-center
                px-8 rounded-lg border-2 border-engbot-300 shadow">
                Log In
            </Link>
        </nav>
    )
}
