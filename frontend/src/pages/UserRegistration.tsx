import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question, ProgressBar } from '@/components/user_registration'
import { UserContext } from '@/contexts'
import { User } from '@/types'

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
    const registrationData: User = {
        username: "unknown",
        type: "unknown",
        proficiency: -1
    }

    function submitQuestion(active: number | number[]) {
        if (typeof active === "number" && active === -1)
            return
        if (typeof active === "object" && active.length === 0)
            return

        const currentQuestion = questions[questionNum]
        setQuestionNum(prevNum => prevNum + 1)

        if (currentQuestion.group) {
            if (typeof active == "number") {
                registrationData[currentQuestion.group] = currentQuestion.labels[active]
            }
            else { //multiselect
                registrationData[currentQuestion.group] =
                    active.map(index => currentQuestion.labels[index])
            }
            console.log(registrationData[currentQuestion.group])
        }

        if (questionNum == questionsCount) {
            setUserInfo(registrationData as User)
            console.log(userInfo)
            navigate('home')
        }
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
