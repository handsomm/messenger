import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiCheck } from 'react-icons/hi'
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2'
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
    const pathname = usePathname()
    const { conversationId } = useConversation()

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiCheck,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users' || !!conversationId
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle
        }
    ], [pathname, conversationId])

    return routes
}

export default useRoutes

