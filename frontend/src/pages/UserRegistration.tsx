import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question, ProgressBar } from '@/components/user_registration'
import { UserContext } from '@/contexts'
import { User } from '@/types'

interface QuestionFormat {
    question: string,
    labels: string[],
    group?: string,
    type?: string,
}

const questions = [
    {
        question: "Which best describes you?",
        labels: [
            "Student",
            "Teacher",
            "Parent",
            "Professional",
            "Other"
        ],
        group: 'type'
    },
    {
        question: "Select your English proficiency.",
        labels: [
            "New",
            "Beginner",
            "Intermediate",
            "Advanced"
        ],
        group: 'proficiency'
    },
    {
        question: "Why do you want to learn English?",
        small: "select all that apply",
        type: "multiselect",
        labels: [
            "Education",
            "Connect with others",
            "Travel",
            "For fun",
            "Other"
        ]
    },
    {
        question: "How did you hear about us?",
        labels: [
            "TikTok",
            "YouTube",
            "Instagram",
            "Google Search",
            "Other"
        ]
    },
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
            //do smthn about single selections
            if (!currentQuestion.type || currentQuestion.type === "single")
                setUserInfo({
                    ...userInfo,
                    [currentQuestion.group]: currentQuestion.labels[active[0]]
                })
            else
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

    return (
        <div className="w-screen h-screen bg-engbot-gradient">
            <ProgressBar progress={0} />
            <main className="grid grid-cols-2">
                <img src="main.png" alt="ENGBOT"/>
                <Question {...questions[questionNum]} onSubmit={submitQuestion} />
            </main>
        </div>
    )
}
