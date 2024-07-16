import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '@/contexts'
import { Question } from "@/layouts/user_registration"
import { questions } from "@/layouts/user_registration/questions"

export function UserRegistration() {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const questionId = parseInt(useParams().questionId as string)
    const currentQuestion = questions[questionId]
    const navigate = useNavigate()

    function submitQuestion(selected: number[]) {
        if (selected.length === 0)
            return

        if (!currentQuestion.type || currentQuestion.type === "single")
            setUserInfo({
                ...userInfo,
                [currentQuestion.group]: currentQuestion.labels[selected[0]]
            })

        else //multiple selections
            setUserInfo({
                ...userInfo,
                [currentQuestion.group]:
                selected.map(index => currentQuestion.labels[index])
            })

        if (questionId == questions.length - 1) {
            console.log(userInfo)
            navigate('/home')
            return
        }

        navigate(`/get-started/${questionId + 1}`)
    }


    return (
        <>
            <Question
                {...currentQuestion}
                onSubmit={submitQuestion}
                style={{
                    wrapperStyle: "flex flex-col items-center my-8 md:w-[70%] w-max-[400px]",
                    submitStyle: "px-4 py-2 my-2 w-full rounded-xl text-center bg-engbot-700 text-neutral-300",
                    buttonStyle: "px-4 py-2 my-2 w-full rounded-xl text-center bg-engbot-100 text-engbot-700",
                    selectedStyle: "px-4 py-2 my-2 w-full rounded-xl text-center bg-sky-600 text-neutral-100"
                }}
            />

            { questionId !== 0 &&
                <p onClick={() => navigate(`/get-started/${questionId - 1}`)} className="cursor-pointer">
                    Go back
                </p>
            }
        </>
    )
}
