import { useContext, useState, useEffect } from "react"
import { UserContext } from "@/contexts"
import { User } from "@/types"
import { MOCK_USER } from "@/lib/mock_data"

export function Home() {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error>(null!)

    useEffect(() => {
        async function fetchUserData() {
            //will replace with actual user data fetching eventually
            return await MOCK_USER()
        }

        fetchUserData()
            .then((res: User) => {
                console.log("successfully init data with mock user")
                setUserInfo(res)
            })
            .catch(error => {
                console.log((error as Error).message)
                setError(error)
            })
        setLoading(false)
    }, [setUserInfo])

    if (loading)
        return <main>loading...</main>
    if (error)
        return <main>{error.message}</main>
    if (!userInfo)
        return <main>user not found</main>

    return (
        <div>
            <main>
                {userInfo.username}
            </main>
        </div>
    )
}
