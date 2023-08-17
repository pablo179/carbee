import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

export default function Dashboard() {
    const cookieStore = cookies()
    const user = cookieStore.get('user')
    /*if(!user) {
        return redirect('/login')
    } */
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}