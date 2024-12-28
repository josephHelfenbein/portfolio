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
                <p className="mt-5 text-sm md:text-base mr-2 font-medium text-gray-900">
                 I'm a Computer Science and Physics student at The City College of New York, passionate about full-stack development and graphics programming. I specialize in modern web technologies, robust backend systems, and advanced graphics programming techniques to create applications that are both functional and visually compelling. Motivated by curiosity and innovation, I strive to create solutions that make a lasting impact. I'm always eager to learn, grow, and take on new challenges—feel free to reach out!
                </p>            
              </div>
            </article>
          </div>
      </div>
    )
}