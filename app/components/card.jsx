import Image from 'next/image';
import picture from '/public/1708555168208.jpg';
export default function Card( ){
    return (
      <div>
        <div className='justify-center flex md:m-0 md:mt-28 m-1 mt-4'>
            <article className="flex items-center max-w-4xl justify-center">
              <div>
                <div className="flex items-center gap-5">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter">Hi 👋, I'm Joseph J Helfenbein</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm md:text-base font-medium text-gray-900">
                  I'm a student at The City College of New York studying Computer Science and Physics. I have experience in full-stack web application development, JavaScript, TypeScript, React, Next.js, Three.js, C++, C#, and Python from my projects, and additionally have developed a game on Steam using Unreal Engine and C++. I'm constantly trying to learn new things and broaden my experience.
                </p>            
              </div>
            </article>
          </div>
      </div>
    )
}