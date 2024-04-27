import { useContext, useState, useEffect } from "react"
import { UserContext } from "@/contexts"
import { LOADING_STATUS } from "@/types"
import { MOCK_USER } from "@/lib/mock_data"

export function Dashboard() {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [status, setStatus] = useState<LOADING_STATUS>(1)

    useEffect(() => {
        async function fetchUserData() {
            //will replace with actual user data fetching eventually
            return await MOCK_USER()
        }

        fetchUserData()
            .then(res => {
                console.log("successfully init data with mock user")
                if (!userInfo)
                    setUserInfo(res)
            })

            .catch(error => {
                console.log(error.message)
                setStatus(error.message)
            })
    }, [userInfo, setUserInfo])

    if (typeof status === "string")
        return <main>{status}</main>
    if (status)
        return <main>loading...</main>
    if (!userInfo)
        return <main>user not found</main>

    const displayUser: React.ReactNode[] = []
    for (const field in userInfo)
        displayUser.push(<p>{field}: {(userInfo[field] as string | string[]).toString()}</p>)

    return (
        <div>
            <main>
                {displayUser}
            </main>
        </div>
    )
}
