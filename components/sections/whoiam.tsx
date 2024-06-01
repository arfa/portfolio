import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';
import { Progress } from '@/components/ui/progress';
import { Expertise } from '../Expertise';
import { ConnectWithMe } from '../ConnectWithMe';
import IconCloud from '../icon-cloud';

export function WhoIAm() {
  const slugs = [
    'typescript',
    'javascript',
    'react',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'amazonaws',
    'postgresql',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'sonarqube',
    'figma',
  ];

  return (
    <div className=' w-full dark:bg-slate-800'>
      <div className='container flex flex-col items-center py-10 md:py-20 lg:flex-row'>
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
          <ConnectWithMe
            title='Connect With Me'
            github='https://github.com/arfa'
            twitter='https://twitter.com/MarwenArfa'
            linkedin='https://www.linkedin.com/in/marwen-arfa/'
            instagram='https://www.instagram.com/marwen_arfa/'
            color='text-violet-800'
            hoverColor='text-violet-500'
            chevronColor='text-violet-500'
          />
        </div>
        <div className='relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background md:p-20 p-4'>
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
