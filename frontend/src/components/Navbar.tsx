import Icon from './Icon'

export default function Navbar() {
    return (
        <nav className="h-24 w-full p-6 flex flex-row justify-between">
            <Icon />
            <button className="px-8 rounded-lg border-2 border-light-300 shadow">
                Log In
            </button>
        </nav>
    )
}
