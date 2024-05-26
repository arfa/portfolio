import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';
import { ConnectWithMe } from '../ConnectWithMe';

export function Hero() {
  return (
    <div className=' bg-violet-800 w-full'>
      <div className='container flex flex-col items-center py-16 md:py-20 lg:flex-row'>
        <div className='w-full flex flex-col items-center justify-center lg:flex-row'>
          <div className='rounded-full border-8 border-slate-400 shadow-xl'>
            <Avatar className='w-[250px] h-[250px]'>
              <AvatarImage src='me.jpg' alt='Marwen Arfa' />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
          <div className='pt-8 sm:pt-10 lg:pl-8 lg:pt-0'>
            <h1 className='text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl'>
              {"Hello I'm Marwen Arfa!"}
            </h1>
            <ConnectWithMe
              title='Connect With Me'
              github='https://github.com/arfa'
              twitter='https://twitter.com/MarwenArfa'
              linkedin='https://www.linkedin.com/in/marwen-arfa/'
              instagram='https://www.instagram.com/marwen_arfa/'
              titleColor='text-white'
              color='text-white'
              hoverColor='text-yellow-300'
              chevronColor='text-yellow-300'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
