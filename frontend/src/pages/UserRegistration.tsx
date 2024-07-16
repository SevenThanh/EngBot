import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '@/contexts'
import { Layout, Question } from "@/layouts/user_registration"

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
            navigate('/home')
            return
        }

        setQuestionNum(prevNum => prevNum + 1)
    }

    const questionElements = questions.map(
        (elem: QuestionFormat) => {
            const buttonShape = "px-4 py-2 my-2 w-full rounded-xl text-center "
            return <Question
                {...elem}
                onSubmit={submitQuestion}
                style={{
                    wrapperStyle: "flex flex-col items-center my-8 md:w-[70%] w-max-[400px]",
                    submitStyle: buttonShape + "bg-engbot-700 text-neutral-300",
                    buttonStyle: buttonShape + "bg-engbot-100 text-engbot-700",
                    selectedStyle: buttonShape + "bg-sky-600 text-neutral-100"
                }}
            />
        }
    )

    return (
        <Layout>
            {questionElements[questionNum]}
            { questionNum !== 0 &&
                <p onClick={() => setQuestionNum(prevNum => prevNum - 1)} className="cursor-pointer">
                    Go back
                </p>
            }
        </Layout>
    )
}
