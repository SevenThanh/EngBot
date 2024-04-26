import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question, ProgressBar } from '@/components/user_registration'
import { UserContext } from '@/contexts'

interface QuestionFormat {
    question: string,
    labels: string[],
    group?: string,
    type?: string,
    key: number
}

const questions = [
    {
        question: "Which best describes you?",
        group: 'type',
        labels: [
            "Student",
            "Teacher",
            "Parent",
            "Professional",
            "Other"
        ],
        key: 0
    },
    {
        question: "Select your English proficiency.",
        group: 'proficiency',
        labels: [
            "New",
            "Beginner",
            "Intermediate",
            "Advanced"
        ],
        key: 1
    },
    {
        question: "Why do you want to learn English?",
        small: "select all that apply",
        type: "multiselect",
        group: "learning_reason",
        labels: [
            "Education",
            "Connect with others",
            "Travel",
            "For fun",
            "Other"
        ],
        key: 2
    },
    {
        question: "How did you hear about us?",
        group: "heard_from",
        labels: [
            "TikTok",
            "YouTube",
            "Instagram",
            "Google Search",
            "Other"
        ],
        key: 3
    }
]
const questionsCount = questions.length

export function UserRegistration() {
    const [questionNum, setQuestionNum] = useState<number>(0);
    const { userInfo, setUserInfo } = useContext(UserContext)
    const navigate = useNavigate()

    function submitQuestion(active: number[]) {
        if (active.length === 0)
            return

        const currentQuestion: QuestionFormat = questions[questionNum]

        if (currentQuestion.group) {
            //single selections
            if (!currentQuestion.type || currentQuestion.type === "single")
                setUserInfo({
                    ...userInfo,
                    [currentQuestion.group]: currentQuestion.labels[active[0]]
                })

            else //multiple selections
                setUserInfo({
                    ...userInfo,
                    [currentQuestion.group]:
                        active.map(index => currentQuestion.labels[index])
                })
        }

        if (questionNum == questionsCount - 1) {
            console.log(userInfo)
            navigate('/dashboard')
            return
        }

        setQuestionNum(prevNum => prevNum + 1)
    }

    const questionElements = questions.map(
        (elem: QuestionFormat) =>
        <Question
            {...elem}
            onSubmit={submitQuestion}
            style={{
                wrapperStyle: "flex flex-col items-center my-8 md:w-[70%] w-max-[400px]",
                submitStyle: "px-4 py-2 my-2 bg-engbot-700 text-neutral-300 w-full rounded-xl text-center",
                buttonStyle: "px-4 py-2 my-2 bg-engbot-100 text-engbot-700 w-full rounded-xl text-center",
                activeStyle: "px-4 py-2 my-2 bg-sky-600 text-neutral-100 w-full rounded-xl text-center"
            }}
        />
    )

    return (
        <div className="w-screen h-screen bg-engbot-gradient overflow-auto">
            <ProgressBar progress={0} />
            <main className="grid grid-cols-2 h-full w-full py-8 px-12">
                <img src="main.png" alt="ENGBOT" className="m-auto w-[70%] lg:w-[40%] object-contain"/>
                <div className="flex flex-col relative my-auto items-center
                    text-3xl bg-engbot-400 py-8 px-12 rounded-3xl">
                    {questionElements[questionNum]}
                    { questionNum ?
                        <p onClick={() => setQuestionNum(prevNum => prevNum - 1)} className="cursor-pointer">
                            Go back
                        </p> :
                        <p onClick={() => navigate('/')}
                            className="cursor-pointer py-2">
                            Back to Title Page
                        </p> }
                </div>
            </main>
        </div>
    )
}
