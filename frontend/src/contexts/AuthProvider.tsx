import { createContext, useState, useEffect } from "react"
import { LOADING_STATUS, UserAuth } from "@/types"
import { MOCK_AUTH } from "@/lib/mock_data"
import { getAuth } from "firebase/auth"
import { app, initAuth } from "@/auth/api"

export const AuthContext = createContext<UserAuth>(null!)

export function AuthProvider({ children }: React.PropsWithChildren) {
    const [userAuth, setUserAuth] = useState<UserAuth>(null!)
    const [status, setStatus] = useState<LOADING_STATUS>(1)

    useEffect(() => {
        async function fetchAuth() {
            //will replace with actual user data fetching eventually
            return await MOCK_AUTH()
        }

        initAuth()
        const auth = getAuth(app)
        console.log(auth)

        fetchAuth().then(res => {
            setUserAuth(res)
            setStatus(0)

        }).catch(error => {
            console.log(`fetch user credentials error: \n${error.message}`)
            setStatus(error.message)
        })
    }, [])

    if (typeof status === "string")
        return <div>{status}</div>
    if (status)
        return <div>loading user credentials...</div>
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    )
}
