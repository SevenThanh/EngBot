export function Login() {
    return (
        <main className="w-screen h-screen bg-gradient-to-r from-light_100 to-background">
            <form className="flex flex-col w-3/5 min-w-[400px] m-auto gap-10 items-center pt-20">
                <h1 className="text-center text-6xl">Login to EngBot</h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full py-2 px-4 bg-background_gray border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full py-2 px-4 bg-background_gray border rounded"
                />
                <button
                    className="py-3 rounded-lg border-2 border-light_300 w-1/2 shadow text-2xl"
                >
                    Login
                </button>
            </form>
        </main>
    )
}
