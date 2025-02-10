'use client'
import {NavigationMenuItem} from '@/types/navigation-menu-item'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems: NavigationMenuItem[] = [
  {
    title: 'صفحه اصلی',
    href: '/',
  },
  {
    title: 'دوره های ری اکت و نکست',
    href: '/courses',
  },
  {
    title: 'مطالب و مقالات',
    href: '/blog',
  },
]

export const TopNavigation: React.FC = () => {
    const pathname = usePathname();

  return (
    <ul className='flex gap-x-8'>
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
            className={`dark:hover:text-blue-400 transition-colors pb-2 ${isActive && 'border-b-2 dark:text-blue-400 dark:text-primary dark:border-primary/30'}`}
            href={item.href}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
