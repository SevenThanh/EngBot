import { useContext } from "react"
import { UserContext } from "@/contexts"
import { UserContextType } from "@/contexts/UserProvider"

export function Home() {
    const { userInfo } = useContext<UserContextType>(UserContext)

    return (
        <div>
            { userInfo ?
            <main>
                {userInfo.username}
            </main> :
            <main>
                loading user info...
            </main>
            }
        </div>
    )
}
