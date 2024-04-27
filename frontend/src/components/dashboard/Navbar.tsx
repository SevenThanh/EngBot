import { BsTencentQq } from 'react-icons/bs'

export function Navbar() {
    return (
        <nav className="w-full p-6 flex flex-row">
            <BsTencentQq size={80} className="p-2 border-4 border-black rounded-xl" />
            <h1 className="text-4xl font-bold">NAVBAR</h1>
        </nav>
    )
}
