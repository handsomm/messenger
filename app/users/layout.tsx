import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import getUser from '../actions/getUsers'
import getUsers from '../actions/getUsers'
import UserList from './components/UserList'

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const users = await getUsers()
    return (
        <Sidebar>
            <div className='h-full'>
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}

export default Layout