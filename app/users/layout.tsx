import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <Sidebar>
            <div className='h-full'>
                {children}
            </div>
        </Sidebar>
    )
}

export default Layout