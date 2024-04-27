import { BsTencentQq } from 'react-icons/bs'

export function Sidebar() {
    return (
        <div className="h-full p-6 flex flex-col">
            <h1 className="text-4xl font-bold">SIDEBAR</h1>
            <BsTencentQq size={80} className="p-2 border-4 border-black rounded-xl" />
        </div>
    )
}
