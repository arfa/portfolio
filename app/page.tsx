'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

import {FaMoon, FaSun} from 'react-icons/fa';

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button>Click me</Button>
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
    </main>
  );
}
