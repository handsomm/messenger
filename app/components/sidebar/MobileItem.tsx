'use client'
import clsx from "clsx"
import Link from "next/link"

interface MobileItemProps {
    label: string,
    icon: any,
    href: string,
    onClick?: () => void,
    active?: boolean
}

const MobileItem: React.FC<MobileItemProps> = ({ label, icon: Icon, href, onClick, active }) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={clsx(
                `group flex gap-x-3 p-4 text-sm leading-6 w-full justify-center font-semibold text-gray-500 hover:text-black hover:bg-gray-100`,
                active && `bg-gray-100 text-black`
            )}
        >
            <Icon className='h-6 w-6' />
        </Link>
    )
}

export default MobileItem