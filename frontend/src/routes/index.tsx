import { Routes, Route } from 'react-router-dom'
import { UserRegistration, Title, Login } from "@/pages"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/get-started" element={<UserRegistration />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Title />} />
        </Routes>
    )
}
