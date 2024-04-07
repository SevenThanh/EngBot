import { Routes, Route } from 'react-router-dom'
import { UserRegistration, Title, Login, Home } from "@/pages"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="get-started" element={<UserRegistration />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Title />} />
        </Routes>
    )
}
