import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';

type ConnectWithMeProps = {
  title?: string;
  titleColor?: string;
  className?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  color?: string;
  hoverColor?: string;
  chevronColor?: string;
};

export function ConnectWithMe({
  className,
  color,
  hoverColor,
  chevronColor,
  titleColor,
  github,
  twitter,
  linkedin,
  instagram,
  title,
}: ConnectWithMeProps) {
  return (
    <div
      className={cn(className, 'flex flex-col justify-center pt-6 sm:flex-row lg:justify-start')}
    >
      <div className='flex items-center justify-center sm:justify-start'>
        <p className={cn('font-body text-lg font-semibold uppercase text-grey-20', titleColor)}>{title}</p>
        <div className='hidden sm:block ml-2'>
          <FaChevronRight className={cn('text-xl', chevronColor)} />
        </div>
      </div>
      <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
        {github && (
          <Link href={github} target='_blank' className='pl-4'>
            <FaGithub className={cn('text-xl', color, `hover:${hoverColor}`)} />
          </Link>
        )}
        {twitter && (
          <Link href={twitter} target='_blank' className='pl-4'>
            <FaTwitter className={cn('text-xl', color, `hover:${hoverColor}`)} />
          </Link>
        )}
        {linkedin && (
          <Link href={linkedin} target='_blank' className='pl-4'>
            <FaLinkedin className={cn('text-xl', color, `hover:${hoverColor}`)} />
          </Link>
        )}
        {instagram && (
          <Link href={instagram} target='_blank' className='pl-4'>
            <FaInstagram className={cn('text-xl', color, `hover:${hoverColor}`)} />
          </Link>
        )}
      </div>
    </div>
  );
}
