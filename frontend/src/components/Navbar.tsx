import Icon from './Icon'

export default function Navbar() {
    return (
        <nav className="h-24 w-full fixed bg-white top-0 p-6 flex flex-row justify-between">
            <Icon />
            <button className="px-8 rounded-lg border-2 border-primary shadow">
                Log In
            </button>
        </nav>
    )
}
