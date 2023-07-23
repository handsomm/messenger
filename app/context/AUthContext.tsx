'use client'

import { SessionProvider } from "next-auth/react"

interface AUthContextProps {
    children: React.ReactNode;
}


export default function AuthContext({ children }: AUthContextProps) {
    return <SessionProvider>{children}</SessionProvider>
}