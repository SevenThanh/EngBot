import { createContext, useState, useEffect } from "react"
import { LOADING_STATUS, UserCredentials } from "@/types"
import { MOCK_USER_CREDENTIALS } from "@/lib/mock_data"
import { getAuth } from "firebase/auth"
import { app, initAuth } from "@/auth/api"

export const AuthContext = createContext<UserCredentials>(null!)

export function AuthProvider({ children }: React.PropsWithChildren) {
    const [userCredentials, setUserCredentials] = useState<UserCredentials>(null!)
    const [status, setStatus] = useState<LOADING_STATUS>(1)

    useEffect(() => {
        async function fetchUserCredentials() {
            //will replace with actual user data fetching eventually
            return await MOCK_USER_CREDENTIALS()
        }

        initAuth()
        const auth = getAuth(app)
        console.log(auth)

        fetchUserCredentials().then(res => {
            setUserCredentials(res)
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
        <AuthContext.Provider value={userCredentials}>
            {children}
        </AuthContext.Provider>
    )
}
