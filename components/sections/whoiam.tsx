import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaChevronRight } from 'react-icons/fa';

export function WhoIAm() {
  return (
    <div className=' w-full dark:bg-slate-800'>
      <div className='container flex flex-col items-center py-16 md:py-20 lg:flex-row'>
        <div className='text-center sm:w-3/4 lg:w-3/5 lg:text-left'>
          <h2 className='font-header text-4xl font-semibold uppercase text-violet-800 sm:text-5xl lg:text-6xl'>
            Who am I?
          </h2>
          <h4 className='pt-6 font-header text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-3xl'>
            {`I'm Marwen Arfa, a Web Developer & Photographer`}
          </h4>
          <p className='pt-6 font-body leading-relaxed text-grey-20'>
            {`I'm Marwen Arfa, a Senior Frontend Developer with a passion for crafting exceptional
            user experiences. I excel at creating visually stunning and high-performing
            applications. Let's build something amazing together.`}
          </p>
          <p className='pt-6 font-body leading-relaxed text-grey-20'>
            {`When I'm not immersed in coding, you'll likely find me indulging in my hobbies.

I have a deep love for video games and anime, which transport me to exciting virtual worlds. I'm also an avid traveler, always seeking new adventures and capturing memories through photography.`}
          </p>

          <p className='pt-6 font-body leading-relaxed text-grey-20'>
            {`Music holds a special place in my heart, and I'm constantly exploring different genres and artists.

Life is all about finding joy in the little things, and these passions bring me endless inspiration and happiness.`}
          </p>
          <div className='flex flex-col justify-center pt-6 sm:flex-row lg:justify-start'>
            <div className='flex items-center justify-center sm:justify-start'>
              <p className='font-body text-lg font-semibold uppercase text-grey-20'>
                Connect with me
              </p>
              <div className='hidden sm:block ml-2'>
                <FaChevronRight className=' text-xl text-violet-500' />
              </div>
            </div>
            <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
              <Link href='https://www.facebook.com/Arfa.Marouen/' target='_blank' className='pl-4'>
                <FaFacebook className='text-xl text-violet-800 hover:text-violet-800' />
              </Link>
              <Link href='https://twitter.com/MarwenArfa' target='_blank' className='pl-4'>
                <FaTwitter className='text-xl text-violet-800 hover:text-violet-800' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/marwen-arfa/'
                target='_blank'
                className='pl-4'
              >
                <FaLinkedin className='text-xl text-violet-800 hover:text-violet-800' />
              </Link>
              <Link href='https://www.instagram.com/marwen_arfa/' target='_blank' className='pl-4'>
                <FaInstagram className='text-xl text-violet-800 hover:text-violet-800' />
              </Link>
            </div>
          </div>
        </div>
        <div className='pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0'>
          <div>
            <div className='flex items-end justify-between'>
              <h4 className='font-body font-semibold uppercase text-black dark:text-white'>HTML &amp; CSS</h4>
              <h3 className='font-body text-3xl font-bold text-violet-800'>95%</h3>
            </div>
            <div className='mt-2 h-3 w-full rounded-full bg-lila'>
              <div className='h-3 rounded-full bg-violet-800' style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='flex items-end justify-between'>
              <h4 className='font-body font-semibold uppercase text-black dark:text-white'>Javascript</h4>
              <h3 className='font-body text-3xl font-bold text-violet-800'>98%</h3>
            </div>
            <div className='mt-2 h-3 w-full rounded-full bg-lila'>
              <div className='h-3 rounded-full bg-violet-800' style={{ width: '98%' }}></div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='flex items-end justify-between'>
              <h4 className='font-body font-semibold uppercase text-black dark:text-white'>React JS</h4>
              <h3 className='font-body text-3xl font-bold text-violet-800'>98%</h3>
            </div>
            <div className='mt-2 h-3 w-full rounded-full bg-lila'>
              <div className='h-3 rounded-full bg-violet-800' style={{ width: '98%' }}></div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='flex items-end justify-between'>
              <h4 className='font-body font-semibold uppercase text-black dark:text-white'>Figma</h4>
              <h3 className='font-body text-3xl font-bold text-violet-800'>91%</h3>
            </div>
            <div className='mt-2 h-3 w-full rounded-full bg-lila'>
              <div className='h-3 rounded-full bg-violet-800' style={{ width: '91%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
