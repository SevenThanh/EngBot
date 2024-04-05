import { useState } from 'react'
import { Question } from '@/components/user_registration'
import { ProgressBar } from '@/components/user_registration'

const questions = [
    {
        question: "Which best describes you?",
        labels: [
            "Student",
            "Teacher",
            "Parent",
            "Professional",
            "Other"
        ]
    },
    {
        question: "Select your English proficiency.",
        labels: [
            "New",
            "Beginner",
            "Intermediate",
            "Advanced"
        ]
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

export function UserRegistration() {
    const [questionData, setQuestionData] = useState(0);

    return (
        <div className="w-screen h-screen bg-engbot-gradient">
            <ProgressBar progress={0} />
            <main className="grid grid-cols-2">
                <img src="main.png" alt="ENGBOT"/>
                <Question style="" buttonStyle="" {...questions[questionData]}/>
            </main>
        </div>
    )
}
