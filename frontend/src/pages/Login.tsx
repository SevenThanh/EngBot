import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom'

//will make this more dev friendly in the future
export function Login() {
    const { register, handleSubmit, formState } = useForm()
    const navigate = useNavigate()

    function onSubmit() {
        try {
            console.log("login form submitted")
            navigate('/')
        } catch (error) {
            console.log((error as Error).message)
        }
    }

    return (
        <main className="w-screen h-screen bg-gradient-to-r from-engbot-100 to-background overflow-auto">
            <h1 className="text-center text-6xl pt-[10vh]">Login to EngBot</h1>
            <form
                className="flex flex-col w-1/2 min-w-[200px] mx-auto gap-10 items-center pt-12"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full py-2 px-4 bg-background_gray border rounded"
                        {...register("username", {
                            required: "Username must not be empty",
                            maxLength: {
                                value: 30,
                                message: "Username must be shorter than 30 characters",
                            },
                            minLength: {
                                value: 3,
                            message: "Username must be longer than 3 characters",
                            }
                        })}
                    />
                    <ErrorMessage
                        as="span"
                        className="text-red-500"
                        errors={formState.errors}
                        name="username" />
                </div>
                <div className="w-full">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full py-2 px-4 bg-background_gray border rounded"
                        {...register("password", {
                            required: "Password must not be empty",
                        })}
                    />
                    <ErrorMessage
                        as="span"
                        className="text-red-500"
                        errors={formState.errors}
                        name="password" />
                </div>
                <button
                    type="submit"
                    className="py-3 rounded-lg border-2 border-engbot-300 w-1/2 shadow text-2xl"
                >
                    Login
                </button>
            </form>
        </main>
    )
}
