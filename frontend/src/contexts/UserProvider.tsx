import { createContext, useState, useEffect } from "react"
import { User } from "@/types"

export type UserContextType = {
    userInfo: User,
    setUserInfo: (user: User) => void
}

async function MOCK_USER() {
    return {
        id: "kevinthuhstink",
        username: "kevinthuhstink",
        type: "student",
        proficiency: 0
    }
}

const NULL_USER: User = {
    id: "null",
    username: "null",
    type: "null",
    proficiency: -1
}

export const UserContext = createContext<UserContextType>(null!)

export function UserProvider({ children }: React.PropsWithChildren) {
    const [userInfo, setUserInfo] = useState<User>(null!)

    useEffect(() => {
        async function fetchUserData() {
            //will replace with actual user data fetching eventually
            return await MOCK_USER()
        }

        fetchUserData()
            .then((res: User) => setUserInfo(res))
            .catch(error => {
                console.log((error as Error).message)
                setUserInfo(NULL_USER)
            })
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}
