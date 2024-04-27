import { BsTencentQq } from 'react-icons/bs'

export function Panel() {
    return (
        <div className="h-full p-6 flex flex-col">
            <h1 className="text-4xl font-bold">PANEL</h1>
            <BsTencentQq size={160} className="p-2 border-4 border-black rounded-xl" />
        </div>
    )
}
