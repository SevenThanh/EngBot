interface ProgressBarProps {
    progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
    //outer div is the gray thing that stretches from end to end
    //inner div is the blue bar
    //have inner div stay to the left and the width is progress%
    return (
        <div>
            <div />
        </div>
    )
}
