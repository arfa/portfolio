import { Service } from '../Service';

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
          <Service
            image='icon-development-white.svg'
            darkImage='icon-development-black.svg'
            alt='Web development icon'
            title='WEB DEVELOPMENT'
            description='This is my main area of expertise. I have been working with HTML, CSS, and
                JavaScript for over 10 years.'
          />
          <Service
            image='icon-content-white.svg'
            darkImage='icon-content-black.svg'
            alt='content marketing icon'
            title='Technical Writing'
            description='I have written technical documentation for a number of projects, including API
                documentation and user guides.'
          />
          <Service
            image='icon-mobile-white.svg'
            darkImage='icon-mobile-black.svg'
            alt='Mobile Application icon'
            title='Mobile Development'
            description='I have experience developing mobile applications for both iOS and Android. This
                include hybrid apps cordova and native apps using React Native.'
          />
        </div>
      </div>
    </main>
  );
}
