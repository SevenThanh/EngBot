export interface QuestionFormat {
    question: string
    labels: string[]
    group: string //determines the name of the question response
    small?: string
    type?: string
    //onSubmit: (selected: number[]) => void
    key: number
}

export const questions: QuestionFormat[] = [
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
