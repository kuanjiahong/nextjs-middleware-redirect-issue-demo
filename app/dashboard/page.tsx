"use client"

import { myServerAction, removeSession } from "./actions"

export default function DashboardPage() {
    const handleClick = async () => {
        const response = await myServerAction()
        console.log("Should have redirected")
    }

    const handleRemoveSession = async () => {
        const response = await removeSession()
        console.log(response)
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <ol>
                <li>
                    <button type="button" onClick={handleRemoveSession}>
                        Remove Session
                    </button>
                </li>
                <li>
                    <button type="button" onClick={handleClick}>
                        Call Server Action
                    </button>
                </li>
            </ol>
        </div>
    )
}
