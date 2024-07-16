interface ProgressBarProps {
    progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="h-12 w-2/3 bg-gray-500 mx-auto my-8 rounded-3xl">
            <div className={`h-12 w-[${progress}%] bg-engbot-400 rounded-3xl`} />
        </div>
    )
}
