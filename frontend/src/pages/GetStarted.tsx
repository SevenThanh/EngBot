import { Question } from '@/components/get_started/Question'
import { ProgressBar } from '@/components/get_started/ProgressBar'

export function GetStarted() {
    return (
        <>
            <ProgressBar progress={0} />
            <Question question="rahhh" answers={["raaaaah x2"]}/>
        </>
    )
}
