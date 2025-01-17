import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AUthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Messenger',
    description: 'Messenger app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <ToasterContext />
                    {children}
                </AuthContext>
            </body>
        </html>
    )
}
