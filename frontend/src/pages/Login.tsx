import { useForm } from 'react-hook-form'
import { FormField } from "@/components/form"
import { usernameConstraints, passwordConstraints } from "@/components/form/constraints"
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
        <main className="w-screen h-screen bg-gradient-to-r from-light_100 to-background overflow-auto">
            <h1 className="text-center text-6xl pt-[10vh]">Login to EngBot</h1>
            <form
                className="flex flex-col w-1/2 min-w-[200px] mx-auto gap-10 items-center pt-12"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <FormField
                        type="text"
                        placeholder="Username"
                        style="w-full py-2 px-4 bg-background_gray border rounded"
                        registration={register("username", usernameConstraints)}
                        errorStyle="text-red-500"
                        errors={formState.errors}
                     />
                </div>
                <div className="w-full">
                    <FormField
                        type="password"
                        placeholder="Password"
                        style="w-full py-2 px-4 bg-background_gray border rounded"
                        registration={register("password", passwordConstraints)}
                        errorStyle="text-red-500"
                        errors={formState.errors}
                     />
                </div>
                <button
                    type="submit"
                    className="py-3 rounded-lg border-2 border-light_300 w-1/2 shadow text-2xl"
                >
                    Login
                </button>
            </form>
        </main>
    )
}
