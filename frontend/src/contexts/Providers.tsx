//wraps the entire page body in context providers
//so that any function/component in the page can access contexts

import { UserProvider } from "./UserProvider"

//UPDATE THIS VAR WITH ANY NEW CONTEXT PROVIDERS
const providers = [ UserProvider ]

export function Providers({ children }: React.PropsWithChildren) {
    const ProviderWrapper = providers.reduce((Elem, Provider) => <Provider>{Elem}</Provider>)
    return (
        <ProviderWrapper>
            {children}
        </ProviderWrapper>
    )
}
