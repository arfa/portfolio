import Image from 'next/image';

export function Services() {
  return (
    <main className='flex min-h-screen flex-col'>
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
          <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
            <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden dark:block'>
                <Image
                  src='icon-email-white.svg'
                  alt='Email Marketing icon'
                  width={200}
                  height={200}
                />
              </div>
              <div className='block dark:hidden'>
                <Image
                  src='icon-email-black.svg'
                  alt='Email Marketing icon'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
                Email Development
              </h3>
              <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
                I have experience developing email templates for a number of clients.
              </p>
            </div>
          </div>
          <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
            <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden dark:block'>
                <Image
                  src='icon-design-white.svg'
                  alt='Theme Design icon'
                  width={200}
                  height={200}
                />
              </div>
              <div className='block dark:hidden'>
                <Image
                  src='icon-design-black.svg'
                  alt='Theme Design icon'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
                Graphic Design
              </h3>
              <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
                I give a lot of importance to the design of my projects. I have experience working
                with designers and giving feedback on designs.
              </p>
            </div>
          </div>
          <div className='group rounded px-8 py-12 shadow dark:bg-violet-800'>
            <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
              <div className='hidden dark:block'>
                <Image
                  src='icon-graphics-white.svg'
                  alt='Graphic Design icon'
                  width={200}
                  height={200}
                />
              </div>
              <div className='block dark:hidden'>
                <Image
                  src='icon-graphics-black.svg'
                  alt='Graphic Design icon'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center'>
              <h3 className='pt-8 text-lg font-semibold uppercase text-violet-800 dark:text-yellow-300 lg:text-xl'>
                Web Design
              </h3>
              <p className='text-grey pt-4 text-sm dark:text-white md:text-base'>
                I am familiar with a number of design tools. I respect the design and I am able to
                convert a design into a website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
