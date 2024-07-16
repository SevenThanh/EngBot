import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div className="w-screen h-screen bg-engbot-gradient overflow-auto flex flex-col">
            <Outlet />
        </div>
    )
}

export { Question } from "./Question"
