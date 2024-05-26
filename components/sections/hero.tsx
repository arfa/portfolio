import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaChevronRight } from 'react-icons/fa';

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
            <div className='flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start'>
              <div className='flex items-center justify-center pl-0 sm:justify-start md:pl-1'>
                <p className='font-body text-lg uppercase text-white'>{"Let's connect"}</p>
                <div className='hidden sm:block  ml-2'>
                  <FaChevronRight className='text-xl text-yellow-300' />
                </div>
              </div>
              <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                <Link
                  href='https://www.facebook.com/Arfa.Marouen/'
                  target='_blank'
                  className='pl-4'
                >
                  <i className='bx bxl-facebook-square text-2xl text-white hover:text-yellow-300'>
                    <FaFacebook />
                  </i>
                </Link>
                <Link href='https://twitter.com/MarwenArfa' target='_blank' className='pl-4'>
                  <i className='bx bxl-twitter text-2xl text-white hover:text-yellow-300'>
                    <FaTwitter />
                  </i>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/marwen-arfa/'
                  target='_blank'
                  className='pl-4'
                >
                  <i className='bx bxl-linkedin text-2xl text-white hover:text-yellow-300'>
                    <FaLinkedin />
                  </i>
                </Link>
                <Link
                  href='https://www.instagram.com/marwen_arfa/'
                  target='_blank'
                  className='pl-4'
                >
                  <i className='bx bxl-instagram text-2xl text-white hover:text-yellow-300'>
                    <FaInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
