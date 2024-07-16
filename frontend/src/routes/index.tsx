import { Routes, Route } from 'react-router-dom'
import { Layout as UserRegistrationLayout } from "@/layouts/user_registration"
import { UserRegistration, Title, Login, Home } from "@/pages"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="get-started" element={<UserRegistrationLayout />}>
                <Route
                    path=":questionId"
                    element={<UserRegistration />}
                />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Title />} />
        </Routes>
    )
}
