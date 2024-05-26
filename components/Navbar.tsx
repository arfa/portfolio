'use client';

import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex items-center justify-between h-16 gap-x-8 max-w-screen-2xl'>
        <div className={'hidden md:flex'}>
          <nav className='flex items-center gap-8 text-sm'>
            <Link
              href='/'
              className={cn(
                'transition-colors hover:text-green-500 no-wrap',
                pathname?.startsWith('/') ? 'text-green-500 font-bold' : 'text-foreground'
              )}
            >
              Home
            </Link>
          </nav>
        </div>

        <div className='items-center justify-between flex-1 hidden md:flex gap-x-2 md:justify-end'>
          <div className='flex flex-row gap-2'>
            <Button onClick={() => setTheme('light')} disabled={theme === 'light'}>
              <FaSun className='w-4 h-4 mr-2' />
              Light mode
            </Button>

            <Button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>
              <FaMoon className='w-4 h-4 mr-2' />
              Dark mode
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
