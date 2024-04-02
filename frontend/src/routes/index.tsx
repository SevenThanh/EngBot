import { Routes, Route } from 'react-router-dom'
import { Home } from "@/pages/Home"
import { Login } from "@/pages/Login.tsx"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
