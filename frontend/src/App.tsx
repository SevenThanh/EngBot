import { BrowserRouter as Router } from "react-router-dom"
import { Providers } from "@/contexts/Providers"
import AppRoutes from './routes/'

function App() {
    console.log(Providers)

    return (
        <Providers>
            <Router>
                <AppRoutes />
            </Router>
        </Providers>
    )
}

export default App
