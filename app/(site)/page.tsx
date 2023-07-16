import AuthForm from '../(site)/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt='logo'
                    height={48}
                    width={48}
                    className='mx-auto w-auto'
                    src='/images/logo.png'
                />
                <h2 className='mt-5 text-center text-2xl font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
            </div>
            <AuthForm />
        </div>
    )
}

export default index