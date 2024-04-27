import { useContext, useState, useEffect } from "react"
import { AuthContext, UserContext } from "@/contexts"
import { LOADING_STATUS, UserAuth } from "@/types"
import { MOCK_USER } from "@/lib/mock_data"
import { Navbar, Sidebar, Panel } from "@/components/dashboard"

export function Dashboard() {
    const userAuth = useContext(AuthContext)
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
                setStatus(0)
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
    for (const field in userAuth)
        displayUser.push(<p>{field}: {(userAuth[field as keyof UserAuth] as string | string[]).toString()}</p>)
    for (const field in userInfo)
        displayUser.push(<p>{field}: {(userInfo[field] as string | string[]).toString()}</p>)

    return (
        <div className="w-screen h-screen overflow-y-auto">
            <Navbar />
            <section className="flex flex-row">
                <Sidebar />
                <main>
                    <h1 className="text-4xl font-bold">MAIN</h1>
                    {displayUser}
                    <Panel />
                </main>
            </section>
        </div>
    )
}
