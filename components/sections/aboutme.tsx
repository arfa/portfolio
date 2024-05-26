import Image from 'next/image';

export function AboutMe() {
  return (
    <main className='flex min-h-screen flex-col dark:bg-slate-800 w-full'>
      <div className='container py-16 md:py-20' id='services'>
        <h2 className='text-center font-header text-4xl font-semibold uppercase text-violet-800 sm:text-5xl lg:text-6xl'>
          {'My Work Experience'}
        </h2>
        <h3 className='pt-6 text-center font-header text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-3xl'>
          {`Here's what I did before`}
        </h3>

        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          {`My career in the world of software development began in Tunisia, where I gained valuable experience working on hybrid mobile applications using Cordova. During this time, I also honed my skills in developing web applications using older technologies such as Backbone.js and jQuery. These early experiences laid the foundation for my journey as a frontend developer.
`}
        </p>
        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          {`As the years passed, I embraced the ever-evolving landscape of frontend development and eagerly embraced new technologies. In particular, I transitioned to AngularJS, which opened up a world of possibilities for creating dynamic and robust web applications. This marked a turning point in my career as I delved deeper into the frontend realm.
`}
        </p>
        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          {`Since 2016, I have been wholeheartedly dedicated to mastering React, a powerful JavaScript library for building user interfaces. React's component-based architecture and declarative approach resonated with me, allowing me to create sophisticated and responsive applications with ease.`}
        </p>

        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          {`I have stayed up-to-date with the latest advancements in React, continually refining my skills and adopting best practices.`}
        </p>

        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          {`Throughout my career, I have embraced challenges and constantly sought opportunities to expand my knowledge and expertise. From the early days of hybrid mobile development to my current focus on React, each step has been a valuable learning experience.`}
        </p>

        <p className='pt-6 font-body leading-relaxed text-grey-20'>
          {`I am passionate about pushing the boundaries of frontend development and delivering exceptional user experiences. I am excited to continue my journey, exploring new technologies and approaches that will shape the future of frontend development. With a solid foundation and a hunger for growth, I am committed to delivering high-quality, innovative solutions that make a positive impact.`}
        </p>
      </div>
    </main>
  );
}
