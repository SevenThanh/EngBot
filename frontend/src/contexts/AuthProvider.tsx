import { createContext, useState, useEffect, useContext } from "react"
import { UserContext } from "./UserProvider"
import { LOADING_STATUS, UserAuth } from "@/types"
import { MOCK_AUTH } from "@/lib/mock_data"

export const AuthContext = createContext(null!)

export function AuthProvider({ children }: React.PropsWithChildren) {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [userAuth, setUserAuth] = useState<UserAuth>(null!)
    const [status, setStatus] = useState<LOADING_STATUS>(1)

    useEffect(() => {
        MOCK_AUTH().then(res => {
            setUserAuth(res)
            setUserInfo({
                ...userInfo,
                ...res
            })
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
