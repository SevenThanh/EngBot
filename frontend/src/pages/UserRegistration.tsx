import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '@/contexts'
import { ProgressBar } from '@/components/user_registration'
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
            <ProgressBar progress={0} />
            <main className="grid grid-cols-2 h-full w-full py-8 px-12">
                <img src="/main.png" alt="ENGBOT" className="m-auto w-[70%] lg:w-[40%] object-contain"/>
                <div className="flex flex-col relative my-auto items-center
                    text-3xl bg-engbot-400 py-8 px-12 rounded-3xl">
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
            </div>
        </main>
    </>
)
}
