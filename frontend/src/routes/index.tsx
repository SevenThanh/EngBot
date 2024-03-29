import { Routes, Route } from 'react-router-dom'
import Home from "@/pages/Home"
import { Signup } from "@pages/Signup.tsx"
import { Login } from "@pages/Login.tsx"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
