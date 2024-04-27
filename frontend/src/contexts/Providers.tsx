//wraps the entire page body in context providers
//so that any function/component in the page can access contexts

import { UserProvider } from "./UserProvider"
import { AuthProvider } from "./AuthProvider"

//UPDATE THIS VAR WITH ANY NEW CONTEXT PROVIDERS
const providers = [ AuthProvider, UserProvider]

export function Providers({ children }: React.PropsWithChildren) {
    return (
        <>
            {providers.reduce((acc, Provider) => <Provider>{acc}</Provider>, children)}
        </>
    )
}
