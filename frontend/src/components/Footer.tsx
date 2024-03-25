import { BsTencentQq } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="min-h-24 bg-background_gray grid grid-cols-3 p-6">
            <div className="border-r flex flex-col items-center">
                <BsTencentQq size={80} className="p-2 border-4 border-blue rounded-xl" />
                <p className="text-xl">Real-Life Scenarios</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xl">Practice Lessons</p>
                <BsTencentQq size={80} className="p-2 border-4 border-blue rounded-xl" />
            </div>
            <div className="border-l flex flex-col items-center">
                <BsTencentQq size={80} className="p-2 border-4 border-blue rounded-xl" />
                <p className="text-xl">AI Grammar Check</p>
            </div>
        </footer>
    )
}
