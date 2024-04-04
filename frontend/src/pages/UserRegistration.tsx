import { Question } from '@/components/user_registration'
import { ProgressBar } from '@/components/user_registration'

export function UserRegistration() {
    return (
        <>
            <ProgressBar progress={0} />
            <Question question="rahhh" answers={["raaaaah x2"]}/>
        </>
    )
}
