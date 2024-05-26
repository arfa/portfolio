import Image from 'next/image';

export function Services() {
  return (
    <main className='flex flex-col'>
      <div className='container py-16 md:py-20' id='services'>
        <h2 className='text-center font-header text-4xl font-semibold uppercase text-violet-800 sm:text-5xl lg:text-6xl'>
          {"Here's what I'm good at"}
        </h2>
        <h3 className='pt-6 text-center font-header text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-3xl'>
          These are the services I offer
        </h3>

        <div className='grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3'>
          <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
            <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden dark:block'>
                <Image
                  src='icon-development-white.svg'
                  alt='development icon'
                  width={200}
                  height={200}
                />
              </div>
              <div className='block dark:hidden'>
                <Image
                  src='icon-development-black.svg'
                  alt='development icon'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
                WEB DEVELOPMENT
              </h3>
              <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
                This is my main area of expertise. I have been working with HTML, CSS, and
                JavaScript for over 10 years.
              </p>
            </div>
          </div>
          <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
            <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden dark:block'>
                <Image
                  src='icon-content-white.svg'
                  alt='content marketing icon'
                  width={200}
                  height={200}
                />
              </div>
              <div className='block dark:hidden'>
                <Image
                  src='icon-content-black.svg'
                  alt='content marketing icon'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
                Technical Writing
              </h3>
              <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
                I have written technical documentation for a number of projects, including API
                documentation and user guides.
              </p>
            </div>
          </div>
          <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
            <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden dark:block'>
                <Image
                  src='icon-mobile-white.svg'
                  alt='Mobile Application icon'
                  width={200}
                  height={200}
                />
              </div>
              <div className='block dark:hidden'>
                <Image
                  src='icon-mobile-black.svg'
                  alt='Mobile Application icon'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
                Mobile Development
              </h3>
              <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
                I have experience developing mobile applications for both iOS and Android. This
                include hybrid apps cordova and native apps using React Native.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
