import { Routes, Route } from 'react-router-dom'
import { Home } from "@/pages/Home"
import { Login } from "@/pages/Login"
import UserIdentity from "@/pages/UserIdentity";
import EngLevel from "@/pages/EngLevel"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
            <Route path="identity" element={<UserIdentity />} />
            <Route path="englevel" element={<EngLevel />} />
        </Routes>
    )
}

