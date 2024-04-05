import { useContext } from "react"
import { Routes, Route } from 'react-router-dom'
import { UserRegistration, Title, Login, Home } from "@/pages"
import { UserContext } from "@/contexts"

export default function AppRoutes() {
    const { userInfo } = useContext(UserContext)

    return (
        <Routes>
            { userInfo.id !== null &&
                <Route path="home" element={<Home />} />
            }
            <Route path="get-started" element={<UserRegistration />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Title />} />
        </Routes>
    )
}
