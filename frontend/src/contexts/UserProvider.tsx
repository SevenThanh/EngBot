import { createContext, useState, useEffect } from "react"
import { User } from "@/types"

export type UserContextType = {
    userInfo: User,
    setUserInfo: (user: User) => void
}

export const UserContext = createContext<UserContextType>(null!)

export function UserProvider({ children }: React.PropsWithChildren) {
    const [userInfo, setUserInfo] = useState<User>(null!)

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}
