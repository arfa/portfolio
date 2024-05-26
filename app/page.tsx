
import { AboutMe } from '@/components/sections/aboutme';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { WhoIAm } from '@/components/sections/whoiam';
import { Button } from '@/components/ui/button';



export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />

      <WhoIAm />

      <Services />

      <AboutMe />
    </main>
  );
}
