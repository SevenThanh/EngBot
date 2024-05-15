import { Routes, Route } from 'react-router-dom'
import { UserRegistration, Title, Signup, Login, Dashboard } from "@/pages"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="get-started" element={<UserRegistration />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Title />} />
        </Routes>
    )
}
