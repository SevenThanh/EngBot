import { ProgressBar } from '@/components/user_registration'
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div className="w-screen h-screen bg-engbot-gradient overflow-auto">
            <ProgressBar progress={0} />
            <main className="grid grid-cols-2 h-full w-full py-8 px-12">
                <img src="/main.png" alt="ENGBOT" className="m-auto w-[70%] lg:w-[40%] object-contain"/>
                <div className="flex flex-col relative my-auto items-center
                    text-3xl bg-engbot-400 py-8 px-12 rounded-3xl">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export { Question } from "./Question"
