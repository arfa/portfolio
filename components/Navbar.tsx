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
      <div className='container flex items-center justify-between h-16 gap-x-8'>
        <div className={'flex'}>
          <nav className='flex items-center gap-8 text-sm'>
            <Link
              href='/'
              className={cn(
                'transition-colors hover:text-violet-500 no-wrap',
                pathname === '/' ? 'text-violet-500 font-bold' : 'text-foreground'
              )}
            >
              Home
            </Link>
            <Link
              href='/blog'
              className={cn(
                'transition-colors hover:text-violet-500 no-wrap',
                pathname.startsWith('/blog') ? 'text-violet-500 font-bold' : 'text-foreground'
              )}
            >
              Blog
            </Link>
          </nav>
        </div>

        <div className='items-center flex-1 flex gap-x-2 justify-end'>
          <div className='flex flex-row gap-2'>
            <Button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              variant='outline'
              size='icon'
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
