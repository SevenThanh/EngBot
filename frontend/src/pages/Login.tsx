import { useForm } from 'react-hook-form'
import { UsernameField, PasswordField, SubmitButton } from "@/components/form"
import { useNavigate } from 'react-router-dom'

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

    /*
     * since both password and username input fields use identical registration
     * functions, pull from the same formState, and are styled the same,
     * i grouped them into one fieldProps variable
     */
    const fieldProps = {
        style: "w-full py-2 px-4 bg-neutral-100 border border-engbot rounded",
        register: register,
        errors: formState.errors
    }

    return (
        <main className="w-screen h-screen bg-gradient-to-r from-engbot-100 to-background overflow-auto">
            <h1 className="text-center text-6xl pt-[10vh]">Login to EngBot</h1>
            <form
                className="flex flex-col w-1/2 min-w-[200px] mx-auto gap-10 items-center pt-12"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <UsernameField {...fieldProps} />
                </div>
                <div className="w-full">
                    <PasswordField {...fieldProps} />
                </div>
                <SubmitButton
                    text="Login"
                    style="py-3 rounded-lg border-2 border-engbot w-1/2 shadow text-2xl"
                />
            </form>
        </main>
    )
}
