'use client'

import { isAuth } from '@/components/Auth'
import Navbar from '@/components/Navbar'

function Dashboard() {
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
        </div>
    )
}

export default isAuth(Dashboard)
