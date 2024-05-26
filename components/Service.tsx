import Image from 'next/image';

type ServiceProps = {
  image: string;
  darkImage: string;
  alt: string;
  title: string;
  description: string;
};

export function Service({ image, darkImage, alt, title, description }: ServiceProps) {
  return (
    <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
      <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
        <div className='hidden dark:block'>
          <Image src={image} alt={alt} width={200} height={200} />
        </div>
        <div className='block dark:hidden'>
          <Image src={darkImage} alt={alt} width={200} height={200} />

        </div>
      </div>
      <div className='text-center'>
        <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
          {title}
        </h3>
        <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
          {description}
        </p>
      </div>
    </div>
  );
}
