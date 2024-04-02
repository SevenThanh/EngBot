import { Routes, Route } from 'react-router-dom'
import { GetStarted, Home } from "@/pages"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
